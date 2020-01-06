<template>
  <div id="app">
    <v-app id="inspire"  >
      <v-content>
        <v-container
                fluid
                fill-height
                fill-width
        >
          <v-layout
                  align-center
                  justify-center
          >
            <v-col link v-show="!$store.state.user || !$store.state.user.type === 'a'"
                   xs8
                   sm8
                   md11> N/A </v-col>
            <v-flex link v-show="$store.state.user"
                    xs8
                    sm8
                    md11
            >
              <v-row v-if="$store.state.user.type === 'u'" align="center">
                <v-col  cols="12">
                  <p class="subtitle-2 text-center" >Balance: {{this.wallet.balance}} € </p>
                </v-col>
              </v-row>
              <v-col cols="12">
                <v-btn v-if="$store.state.user.type === 'o'" color="primary" v-on:click.prevent="registerMovement()" >Register New Income</v-btn>
                <v-btn v-if="$store.state.user.type === 'u'" color="primary" v-on:click.prevent="registerMovement()" >Create New Expense</v-btn>
              </v-col>
              <v-card v-if="$store.state.user.type === 'u'">
                <v-card-title>
                  <v-text-field
                          v-model="search"
                          append-icon="search"
                          label="Search all"
                          single-line
                          hide-details
                  ></v-text-field>
                  <div class="form-row" align-center
                       justify-center>
                    <div class="col" >
                      <v-text-field v-model="searchObject.id" label="ID:"></v-text-field>
                    </div>
                    <div class="col">
                      <v-text-field v-model="searchObject.type" label="Type:"></v-text-field>
                    </div>
                    <div class="col">
                      <v-text-field v-model="searchObject.date" label="Date:" hint="YYYY-MM-DD format"
                                    persistent-hint></v-text-field>
                    </div>
                    <div v-if="!(searchObject.date=='')" class="col">
                      <v-text-field v-model="searchObject.end_date" label="End Date:" hint="YYYY-MM-DD format"
                                    persistent-hint></v-text-field>
                    </div>
                    <div class="col">
                      <v-text-field v-model="searchObject.category_id" label="Category:"></v-text-field>
                    </div>
                    <div class="col">
                      <v-text-field v-model="searchObject.type_payment" label="Type of payment:"></v-text-field>
                    </div>
                  </div>
                </v-card-title>
                <v-data-table
                        :headers="headers"
                        :items="getfilters"
                        :search="search"
                        :items-per-page=5
                        :sort-by="['id','date', 'type','category_id','transfer','transfer_wallet_id','value','iban','description','source_description','mb_entity_code','type_payment','start_balance','end_balance']"
                        :sort-desc="[true, true,true]"
                        class="elevation-1"
                        :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
              }"

                >
                  <template v-slot:top>
                    <v-toolbar flat color="white">
                      <v-toolbar-title>Users</v-toolbar-title>
                      <v-divider
                              class="mx-4"
                              inset
                              vertical
                      ></v-divider>
                      <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" max-width="500px">
                        <v-card ref="form">
                          <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="editedMovement.description" label="Description"></v-text-field>
                                </v-col>
                                <v-select
                                        v-model="editedMovement.category_id"
                                        :items="categories"
                                        item-text="name"
                                        item-value="id"
                                        label="Category">
                                </v-select>
                              </v-row>

                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editMovement(item)"
                    >
                      edit
                    </v-icon>
                  </template>
                </v-data-table>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>


</template>

<script>
  import { async } from 'q';

  export default {

    data() {
      return {
        dialog:null,
        search:'',
        searchObject:{
          id:'',
          type:'',
          date:'',
          category_id:'',
          type_payment:'',
          email:'',
          end_date:''
        },
        headers:[{text:'ID', value:'id'},
          {
            text: 'Type',
            value:'type'
          },
          {text:'Transfer',value:'transfer'
          },
          {text:'Transfer Wallet Email',value:'transfer_wallet_id'
          },
          {text:'Type Payment',value:'type_payment'
          },
          {text:'Category',value:'category_id'
          },
          {text:'IBAN',value:'iban'
          },
          {text:'MB Entity Code',value:'mb_entity_code'
          },
          {text:'MB Payment Reference',value:'mb_payment_reference'
          },
          {text:'Description',value:'description'
          },
          {text:'Source Description',value:'source_description'
          },
          {text:'Date',value:'date'
          },
          {text:'Start Balance',value:'start_balance'
          },
          {text:'End Balance',value:'end_balance'
          },
          {text:'Value',value:'value'
          },
          { text: 'Actions', value: 'action', sortable: false }
        ],
        movements: [],
        categories:[],
        wallet:[],
        user:[],
        users:[],
        user_id:null,
        user_wallet_id:null,
        editedIndex: -1,
        editedMovement: {
          id:'',
          category_id: '',
          description: ''
        },
        defaultMovement: {
          id:'',
          category_id: '',
          description: ''
        }
      }
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Edit Movement' : 'Edit Movement'
      },

      getfilters(){
        let self = this;
        let movements = this.movements;

        if(this.searchObject.category_id !== '') {
          movements = movements.filter(movements => movements.category_id.includes(self.searchObject.category_id));
        }
        if(this.searchObject.type !== '') {
          movements = movements.filter(movements => movements.type.toLowerCase().includes(self.searchObject.type.toLowerCase()));
        }
        if(this.searchObject.id !== '') {
          movements = movements.filter(movements => movements.id.toString().includes(self.searchObject.id));
        }
        if(this.searchObject.type_payment !== '') {
          movements = movements.filter(movements => movements.type_payment.toLowerCase().includes(self.searchObject.type_payment.toLowerCase()));
        }
        if(this.searchObject.end_date !== ''){
          movements.forEach(element => {
            if(element.date >= self.searchObject.date && element.date <= self.searchObject.end_date){

            }

          });
        }else { if(this.searchObject.date !== ''){
          movements = movements.filter(movements => movements.date.toLowerCase().includes(self.searchObject.date.toLowerCase()));
        }
        }

        return movements;
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created() {
      this.getCategories();
      this.getUser();
      this.getUsers();
    },

    methods:{
      async getCategories(){
        await axios.get("/api/categories")
                .then(response => {
                  this.categories = response.data
                })
                .catch(error => {
                  console.log(error);
                });
      },
      async getUsers(){
        await axios.get("/api/users")
                .then(response => {
                  this.users = response.data
                })
                .catch(error => {
                  console.log(error);
                });
      },
      async getUser() {
        this.user = this.$store.state.user
        this.user_id = this.user.id
        if(this.user.type === 'u'){
          this.user_wallet_id = this.user.id
          this.getUserWallet();
          this.getMovements();
        }

      },
      async getMovements() {
        await axios.get("/api/users/movements")
                .then(response => {
                  this.movements = response.data

                  this.user_wallet_id = response.data[0].wallet_id
                  this.movements.forEach(element => {
                    element.transfer == 1 ? element.transfer = 'Yes' : element.transfer = 'No'
                    element.type == 'e' ? element.type = 'Expense' : element.type = 'Income'
                    element.type_payment == 'c' ? element.type_payment = 'Cash' : element.type_payment == 'bt' ?  element.type_payment='Bank Transfer' : element.type_payment='MB Payment'

                    this.categories.forEach(category => {
                      element.category_id == category.id ? element.category_id = category.name : 'n/a'
                    });
                    if(element.category_id === null){
                      element.category_id = 'N/A'
                    }


                    // this.users.forEach(user => {
                    //   element.transfer_wallet_id == user.id ? element.transfer_wallet_id = user.email : element.transfer_wallet_id = 'N/A'
                    //   element.wallet_id == user.id ? element.wallet_id = user.email : element.wallet_id = 'N/A'
                    // });
                  })
                })
                .catch(error => {
                  console.log(error);
                });
        this.getUserWallet();


      },
      async getUserWallet() {
        await axios.get("/api/wallets/"+this.user_wallet_id)
                .then(response => {
                  this.wallet = response.data
                })
                .catch(error => {
                  console.log(error);
                });
      },
      registerMovement: async function (){
        this.$router.push('/movements/create');

      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedMovement = Object.assign({}, this.defaultMovement)
          this.editedIndex = -1
          this.getMovements();
        }, 300)
      },
      save : async function() {
        const formData = new FormData();

        console.log(this.editedMovement.description)
        formData.append('category_id', this.editedMovement.category_id);
        formData.append('description', this.editedMovement.description);
        const headers = { 'Content-Type': 'multipart/form-data'};

        console.log(this.editedMovement.id)
        await axios.post('api/movements/update/'+this.editedMovement.id, formData, { 'Content-Type': 'multipart/form-data'})
                .then(response=>{
                  console.log(response.data)
                }).catch(error => {
                  this.hasAlert = true
                  console.log(error)
                });
        this.getMovements();
        this.dialog = false
      },

      editMovement (item) {
        this.movement_id = this.movements.indexOf(item)

        this.editedMovement = Object.assign({}, item)
        this.dialog = true
      },
    }
  }


</script>
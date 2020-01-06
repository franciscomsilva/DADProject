<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container  fluid fill-height fill-width >
          <v-layout align-center justify-center>
            <v-flex v-if="$store.state.user && $store.state.user.active === 1"  xs12 sm8 md8>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Register New Movement</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    </template>
                  </v-tooltip>
                  <v-tooltip right>
                    <template v-slot:activator="{ on }">
                    </template>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form" >
                    <v-col v-if="($store.state.user.type === 'o' || $store.state.user.type === 'a') && $store.state.user.active === 1" class="d-flex" cols="12" sm="6" >
                       <v-select
                          :rules="[rules.required]"
                          v-model="form.type_payment"
                          :items="income_payment_types"
                          label="Type of Payment"
                          >
                      </v-select>
                    </v-col>

                    <v-col v-if="$store.state.user.type === 'u' && $store.state.user.active === 1" class="d-flex" cols="12" sm="6" >
                      <v-checkbox
                        v-model="form.transfer"
                        label="Transfer"
                      ></v-checkbox>
                    </v-col>

                    <v-col v-if="$store.state.user.type === 'u' && $store.state.user.active === 1 && form.transfer == false" class="d-flex" cols="12" sm="6" >
                       <v-select
                          :rules="[rules.required]"
                          v-model="form.type_payment"
                          :items="expense_payment_types"
                          label="Type of Payment"
                          >
                      </v-select>
                    </v-col>

                    <v-row v-if="form.type_payment ==='bt'">
                      <v-col cols="8">
                        <v-text-field
                          id='iban'
                          label="IBAN"
                          v-model="form.iban"
                          hint="Insert IBAN, 2 letters and 23 digits"
                          :rules="[rules.required,rules.iban]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row v-if="form.type_payment ==='mb'">
                      <v-col cols="8">
                        <v-text-field
                          id='mb_entity_code'
                          label="MB entity code"
                          v-model="form.mb_entity_code"
                          hint="Insert MB entity code, 5 digits"
                          :rules="[rules.required,rules.mb_entity_code]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          id='mb_payment_reference'
                          label="MB payment reference"
                          v-model="form.mb_payment_reference"
                          hint="Insert MB payment reference, 9 digits"
                          :rules="[rules.required,rules.mb_payment_reference]"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col v-if="(($store.state.user.type === 'o' || $store.state.user.type === 'a') || ($store.state.user.type === 'u' && form.transfer == true)) && $store.state.user.active === 1" class="d-flex" cols="12" sm="6" >

                         <v-select

                         :rules="[rules.required]"
                         v-model="form.wallet_id"
                         :items="users"
                         item-text="name"
                         item-value="id"
                         label="Users">
                        </v-select>

                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6">

                        <v-select

                         :rules="[rules.required]"
                         v-model="form.category_id"
                         :items="incomeCategories"
                         item-text="name"
                         item-value="id"
                         label="Category">
                        </v-select>

                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="form.description"
                              label="Description" ></v-text-field>
                      </v-col>
                      <v-col v-if="($store.state.user.type === 'o' || $store.state.user.type === 'a') && $store.state.user.active === 1" cols="12" sm="6" md="3">
                        <v-text-field v-model="form.source_description"
                              label="Source description"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="8">
                        <v-text-field
                              id='value'
                              label="Value to Credit"
                              v-model="form.value"
                              hint="from 0,01€ up to 5000,00€"
                              prefix="€"
                              :rules="[rules.required,rules.credit]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions v-if="($store.state.user.type === 'o' || $store.state.user.type === 'a')&& $store.state.user.active === 1">
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-on:click.prevent="registerIncome()" >Register New Movement</v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-alert color="red"
                           dense
                           outlined
                           type="error"
                           v-if="hasAlert">{{errorMsg}}</v-alert>
                </v-card-actions>
                <v-spacer></v-spacer>
                <v-card-actions v-if="$store.state.user.type === 'u' && $store.state.user.active === 1">
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-on:click.prevent="registerExpense()" >Register New Movement</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-col v-else>
              Não vai dar
            </v-col>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>
  </div>
</template>

<script>

export default {


    data : function(){

        return  {
            form: {
                wallet_id:null, /* user id */
                type:null,
                transfer:false,
                transfer_movement_id:null,
                transfer_wallet_id:null,
                type_payment:null,
                category_id:null,
                iban:null,
                mb_entity_code:null,
                mb_payment_reference:null,
                description:null,
                source_description:null,
                value:null
            },
            incomeCategories: [],
            debitCategories: [],
            users: [],
            destUser: null,
            wallet: [],
            rules: {
                required: value => !!value || 'Required.',
                credit: value => {
                  const pattern = /^(0(.(?:2[1-9]|[0-9]\d))|[1-9]\.(?:2[0-9]|[0-9]\d)|[1-8][0-9]\.(?:2[0-9]|[0-9]\d)|9[0-9]\.(?:2[0-9]|[0-9]\d)|[1-8][0-9]{2}\.(?:2[0-9]|[0-9]\d)|9[0-8][0-9]\.(?:2[0-9]|[0-9]\d)|99[0-9]\.(?:2[0-9]|[0-9]\d)|[1-4][0-9]{3}\.(?:2[0-9]|[0-9]\d)|5000\.(?:2[0-0]|[0-0]\d))$/
                  return pattern.test(value) || 'Must be a number between 0,01 and 5000,00'
                },
                iban: value => {
                  const pattern = /^[A-Z]{2}[0-9]{23}$/
                  return pattern.test(value) || 'Must contain 2 letters and 23 digits'
                },
                mb_entity_code: value => {
                  const pattern = /^[0-9]{5}$/
                  return pattern.test(value) || 'Must contain 5 digits'
                },
                mb_payment_reference: value => {
                  const pattern = /^[0-9]{9}$/
                  return pattern.test(value) || 'Must contain 9 digits'
                }


            },
            income_payment_types: [{text: 'Cash', value: 'c'},{text: 'Bank Transfer', value:'bt'}],
            expense_payment_types: [{text: 'Bank Transfer', value:'bt'},{text: 'MB payment', value: 'mb'}],
            hasAlert:null,
            errorMsg:null
        }
    },

    created() {
      this.getIncomeCategories();
      this.getDebitCategories();
      this.getUsers();
    },

    methods:{

        async getIncomeCategories() {

            await axios.get("/api/categories/incomeCategories")
            .then(response => {
                this.incomeCategories = response.data

            })
            .catch(error => {
                console.log(error);
            });
        },

        async getDebitCategories() {

            await axios.get("/api/categories/debitCategories")
            .then(response => {
                this.debitCategories = response.data

            })
            .catch(error => {
                console.log(error);
            });
        },

        async getUsers() {

            await axios.get("/api/users/platformUsers")
            .then(response => {
                this.users = response.data
              /*FILTERS TO REMOVE LOGGED IN USER*/
              this.users = this.users.filter(user => user.id != this.$store.state.user.id);
            })
            .catch(error => {
                console.log(error);
            });
        },

        registerExpense: async function (){
            this.form.type = 'e';
            //this.form.wallet_id = user_id;
            this.hasAlert = false;
            this.form.transfer_wallet_id = this.form.wallet_id;
            this.form.wallet_id=null;
            if(this.form.transfer === true){
              this.form.transfer = 1;
            }

            if(!this.$refs.form.validate()){
                return;
            }


          await axios.get(`api/users/${this.form.transfer_wallet_id}`)
            .then(response => {
              this.destUser = response.data.data;
            }).catch(error =>  {
              console.log(error)
            });

          await axios.post('api/registerMovement', this.form)
                .then(response=>{
                  if(this.form.transfer == 1){
                    this.$socket.emit('transfer-user',this.form.transfer_wallet_id,this.$store.state.user,this.form.value,this.destUser.email);
                  }
                  this.$toasted.show(`Transfer sent!`);
                  this.$router.push('/movements')
                }).catch(error => {
                  this.hasAlert = true;
                  this.errorMsg = "Error creating new movement!";
                });

        },

        registerIncome: async function (){
            this.form.transfer = 0;
            this.form.type = 'i';
            this.hasAlert = false;
            if(!this.$refs.form.validate()){
                return;
            }

          await axios.get(`api/users/${this.form.wallet_id}`)
                  .then(response => {
                    this.destUser = response.data.data;
                  }).catch(error =>  {
                    console.log(error)
                  });

          await axios.post('api/registerMovement', this.form)
                .then(response=>{
                  this.$socket.emit('income-user',this.form.wallet_id,this.form.value,this.destUser.email);
                  this.$toasted.show(`Income sent!`);
                  this.$router.push('/home')
                })

        }
    }

}


</script>

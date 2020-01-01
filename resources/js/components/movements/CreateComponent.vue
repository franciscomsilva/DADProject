<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container  fluid fill-height fill-width >
          <v-layout align-center justify-center>
            <v-flex v-if="$store.state.user.type === 'o'" xs12 sm8 md8>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Register Income</v-toolbar-title>
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
                    <v-row class="d-flex" cols="12" sm="6" >
                       <v-select 
                          :rules="[rules.required]" 
                          v-model="form.type_payment" 
                          :items="payment"
                          >
                      </v-select>
                    </v-row>
                    
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

                    <v-row>
                      <v-col class="d-flex" cols="12" sm="6" >

                         <v-select 
                         filled 
                         :rules="[rules.required]" 
                         v-model="form.wallet_id" 
                         :items="users"
                         item-text="name"
                         item-value="id">
                        </v-select>

                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6">

                        <v-select 
                         filled 
                         :rules="[rules.required]" 
                         v-model="form.category_id" 
                         :items="categories"
                         item-text="name"
                         item-value="id">
                        </v-select>

                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field v-model="form.description"
                              label="Description" ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field :rules="[rules.required]" v-model="form.source_description"
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
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-on:click.prevent="registerIncome()" >Register Income</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-col v-else>
              Olny for Operators
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
                type:"i",
                transfer:0,
                type_payment:null,
                category_id:null,
                iban:null,
                description:null,
                source_description:null,
                value:null,
            },
            categories: [],
            users: [],
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
                }
            },
            payment: [{text: 'Cash', value: 'c'},{text: 'Bank Transfer', value:'bt'}],
            hasAlert:null
        }
    },

    created() {
      this.getCategories();
      this.getUsers();

    },
  
    methods:{

        async getCategories() {

            await axios.get("/api/categories/incomeCategories")
            .then(response => {
                this.categories = response.data
                
            })
            .catch(error => {
                console.log(error);
            });
        },

        async getUsers() {

            await axios.get("/api/users/platformUsers")
            .then(response => {
                this.users = response.data
            })
            .catch(error => {
                console.log(error);
            });
        },



        registerIncome: async function (){
            this.hasAlert = false;
            if(!this.$refs.form.validate()){
                return;
            }

          await axios.post('api/registerIncome', this.form)
                .then(response=>{
                  this.$router.push('/movements')
                }).catch(error => {
                  this.hasAlert = true
                  console.log(error)
                });
      
        }
    }
      
}


</script>

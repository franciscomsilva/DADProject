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
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="movements"
              :search="search"
              :items-per-page=5
              :sort-by="['date', 'type','category_id','transfer','value','iban','description','source_description','mb_entity_code','type_payment','start_balance','end_balance']"
              :sort-desc="[true, true]"
              class="elevation-1"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
              }"
              
            >
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
        search:'',
        headers:[{
            text: 'Type',
            value:'type'
        },
        {text:'Transfer',value:'transfer'       
        },
        {text:'Type Payment',value:'type_payment'       
        },
        {text:'Category ID',value:'category_id'       
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
        }
        ],
        movements: [],
        wallet:[],
        user:[],
        user_id:null,
        user_wallet_id:null
    }
  },
  
  created() {
    this.getUser();
    this.$socket.emit('register',this.$store.state.user);
  },

  methods:{
    async getUser() {
        this.user = this.$store.state.user;
        this.user_id = this.user.id
        if(this.user.type === 'u'){
          this.user_wallet_id = this.user.id
          this.getUserWallet();
          this.getMovements();
        }
    },
      
    async getMovements() {
      console.log('GET MOVEMENTS')
          await axios.get("/api/users/movements")
          .then(response => {
              this.movements = response.data
              this.user_wallet_id = response.data[0].wallet_id
              console.log(this.movements)
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
        await this.$router.push('/movements/create');

    }
  },
  sockets:{
    chat(msg){
      console.log(msg)
      this.getMovements();
      this.getUserWallet();
    }
  }
}


</script>

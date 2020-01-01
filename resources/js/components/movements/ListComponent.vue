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
        <v-col link v-show="!$store.state.user"
            xs8
            sm8
            md11> Only for platform users </v-col>
          <v-flex link v-show="$store.state.user"
            xs8
            sm8
            md11
          >
          <v-col cols="12">
          <v-btn v-if="$store.state.user.type === 'o'" color="primary" v-on:click.prevent="registerIncome()" >Register New Income</v-btn>
          <v-btn color="primary" v-on:click.prevent="createMovement()" >Create New Movement</v-btn>
          </v-col>
            <v-data-table
                :headers="headers"
                :items="movements"
                :sort-by="['date', 'type']"
                :sort-desc="[false, true]"
                multi-sort
                class="elevation-1"
            ></v-data-table>
          
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>


</template>

<script>

export default {

  data() {
      return { 
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
        movements: []
    }
  },
  
  created() {
      this.getMovements();
  },

  methods:{
      
    async getMovements() {

        await axios.get("/api/users/movements")
        .then(response => {
            this.movements = response.data
        })
        .catch(error => {
             console.log(error);
        });
    },
    registerIncome: async function (){
        this.$router.push('/movements/create');

    },
    createMovement: async function (){
        
    }        
  }
}


</script>

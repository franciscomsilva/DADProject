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
        <v-col link v-show="!($store.state.user.type === 'a')"
            xs8
            sm8
            md11> Only for admin users </v-col>
          <v-flex link v-show="$store.state.user.type === 'a'"
            xs8
            sm8
            md11
          >
          <v-card>
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
              :items="users"
              :search="search"
              :sort-by="['name','email','type','active','nif']"
              :sort-desc="[true, true]"
              class="elevation-1"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
              }"
              
            ></v-data-table>
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
        dialog: false,
        headers:[{
            text: 'User Name',
            value:'name'
        },
        {text:'Email',value:'email'       
        },
        {text:'Type',value:'type'       
        },
        {text:'Active',value:'active'       
        },
        {text:'NIF',value:'nif'       
        }
        ],
        users: [],
        
        editedIndex: -1,
        editedUser: {
            name: '',
            email: '',
            type: '',
            acive: '',
            nif: ''
        },
        defaultUser: {
            name: '',
            email: '',
            type: '',
            acive: '',
            nif: ''
        },
        
    }
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
    },
  
  created() {
      this.getUsers();
  },

  methods:{
      
    async getUsers() {
          await axios.get("/api/users")
          .then(response => {
              this.users = response.data.data
          })
          .catch(error => {
              console.log(error);
          });
        
    },
    editUser (user) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editeduser = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedUser = Object.assign({}, this.defaultUser)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedUser)
        } else {
          this.desserts.push(this.editedUser)
        }
        this.close()
      },
  }
}


</script>

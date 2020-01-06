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
        <v-col v-if="!$store.state.user || $store.state.user.type === 'o' || $store.state.user.type === 'u'">
          Não vai dar
          </v-col>
        
    <v-card v-if="$store.state.user.type === 'a'">
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
      :items-per-page=5
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
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Admin/Operator</v-btn>
            </template>
            <v-card ref="form">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedUser.name" label="Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedUser.nif" label="NIF"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                        <v-select 
                          v-model="editedUser.type" 
                          :items="userTypes"
                          label="User Type"
                          >
                      </v-select>
                      </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-file-input
                            v-model="selectedFile"
                            placeholder="Pick an avatar"
                            prepend-icon="camera"
                            label="Avatar"
                    ></v-file-input>
                    </v-col>
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
          @click="editUser(item)"
        >
          mdi-cancel
        </v-icon>
        <v-icon
          small
          @click="deleteUser(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>
    </v-card>
  </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import { async } from 'q';

export default {
  data: () => ({
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
        },
        {text:'Photo',value:'photo'
        },
        {text: 'Balance', value:'balance'},
        { text: 'Actions', value: 'action', sortable: false },
        
        ],

        users: [],
        wallet:null,
        user_id_edit:null,
        user:[],        
        selectedFile:null,
        editedIndex: -1,
        editedUser: {
            name: '',
            email: '',
            type: '',
            active: '',
            photo:''
        },
        defaultUser: {
            name: '',
            email: '',
            type: '',
            active: '',
            photo:''
        },
        userTypes: [{text: 'Admin', value: 'a'},{text: 'Operator', value:'o'}]
    }),
    hasAlert:null,
    

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Admin/Operator' : 'edit'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.getUsers();
    this.getUser();
  },

  methods: {
    async getUser() {
      this.user = this.$store.state.user
    },     
    async getUsers() {
          await axios.get("/api/usersList")
          .then(response => {
           
              this.users = response.data.data
              this.users.forEach(element => {
                element.active == 1 ? element.active = 'Active' : element.active = 'Disable'
                element.type == 'u' ? element.type = 'User' : element.type == 'a' ?  element.type='Admin' : element.type='Operator'
                if(element.type === 'u'){
                  this.getUserWallet(element.id)
                  if(true){
                    element['balance'] = 'empty'
                  } else{
                    element['balance'] = 'not empty'
                  }
                }
                
              console.log(element)
              });              
          })
          .catch(error => {
              console.log(error);
          });
    },
    async getUserWallet(user_id) {
          await axios.get("/api/wallets/"+user_id)
          .then(response => {
              console.log(response.data)
              this.wallet = response.data.data.balance
          })
          .catch(error => {
              console.log(error);
          });
    },
    async editUser (item) {
      this.user_id_edit = this.users.indexOf(item) +2
      if(this.user_id_edit == this.user.id){

      } else{
          confirm('Are you sure you want to disable this user?') && this.updateUser()
      }
       
    }, 
    updateUser: async function(){
      if(this.users[this.user_id_edit].type === 'u'){
      const formData = new FormData();
        formData.append("_method", "put");

        formData.append('active', 0);

      const headers = { 'Content-Type': 'multipart/form-data'}
      
      await axios.post('api/users/editStatus/'+this.user_id_edit, formData, headers)
      .then(response=>{
      }).catch(error => {
      this.hasAlert = true
        console.log(error)
      });
      this.getUsers();}
      else{
        if(!(this.users[this.user_id_edit].type === 'u')){
          confirm('Não podes dar disable a ops ou adms') 
        }
      }
    },
    deleteUser: async function (item) {
      this.user_id_edit = this.users.indexOf(item) +2

      
          confirm('Are you sure you want to delete this user?') &&  this.delete()
      
      
    },
    delete: async function (item) {
      if(!(this.user_id_edit === this.user.id)){
        await axios.put('api/users/delete/'+this.user_id_edit)
        .then(response=>{
          

        }).catch(error => {
          this.hasAlert = true
          console.log(error)
        });
        this.getUsers();

        } 
        if(this.user_id_edit === this.user.id){
          confirm('Não te podes apagar a ti proprio')
      }

    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedUser = Object.assign({}, this.defaultUser)
        this.editedIndex = -1
        this.getUsers();
      }, 300)
    },

    save : async function() {
      this.hasAlert = false;

        const formData = new FormData();

        formData.append('name', this.editedUser.name);
        formData.append('email', this.editedUser.email);
        formData.append('password', 'Gt3');
        formData.append('password_confirmation', 'Gt3');
        formData.append('type', this.editedUser.type);
        formData.append('active', 1);
        formData.append('nif', this.editedUser.nif);

        
        if(this.selectedFile) formData.append('photo', this.selectedFile);
        const headers = { 'Content-Type': 'multipart/form-data'}

        await axios.post('api/register', formData, headers)
        .then(response=>{
          

        }).catch(error => {
          this.hasAlert = true
          console.log(error)
        });
      this.close()
    },
  },
}
</script>
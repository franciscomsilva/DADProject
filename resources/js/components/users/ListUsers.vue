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
                label="Search all"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <div class="form-row" align-center justify-center>
              <div class="col" >
                <v-text-field v-model="searchObject.name" label="Name:"></v-text-field>
              </div>
              <div class="col">
                <v-text-field v-model="searchObject.email" label="Email:"></v-text-field>
              </div>
              <div class="col">
                <v-text-field v-model="searchObject.type" label="Type:"></v-text-field>
              </div>
              <div class="col">
                <v-text-field v-model="searchObject.active" label="Active:"></v-text-field>
              </div>
              <div class="col">
                <v-text-field v-model="searchObject.nif" label="NIF:"></v-text-field>
              </div>
              <div class="col">
                <v-text-field v-model="searchObject.balance" label="Balance:"></v-text-field>
              </div>
            </div>
    <v-data-table
      :headers="headers"
      :items="getfilters"
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
    <template v-slot:item.photo="{item}">
      <v-img :src="`/storage/fotos/${item.photo}`" class="img-circle" style="max-width:50px;" ></v-img>
    </template>
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
        searchObject:{
          name:'',
          nif:'',
          email:'',
          type:'',
          active:'',
          balance:''
        },
        headers:[{
            text: 'Photo',
            value:'photo'
        },
        {text:'User Name',value:'name'
        },
        {text:'Email',value:'email'       
        },
        {text:'Type',value:'type'       
        },
        {text:'Active',value:'active'       
        },
        {text:'NIF',value:'nif'       
        },
        {text: 'Balance', value:'balance'},
        { text: 'Actions', value: 'action', sortable: false }        
        ],

        users: [],
        wallets:[],
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
    },
    getfilters(){
      let self = this;
      let users = this.users;
      if(this.searchObject.name !== '') {
        users = users.filter(users => users.name.toLowerCase().includes(self.searchObject.name.toLowerCase()));
      }
      if(this.searchObject.email !== '') {
        users = users.filter(users => users.email.toLowerCase().includes(self.searchObject.email.toLowerCase()));
      }
      if(this.searchObject.type !== '') {
        users = users.filter(users => users.type.toLowerCase().includes(self.searchObject.type.toLowerCase()));
      }
      if(this.searchObject.nif !== '') {
        users = users.filter(users => users.nif.includes(self.searchObject.nif));
      }
      if(this.searchObject.active !== '') {
        users = users.filter(users => users.active.toLowerCase().includes(self.searchObject.active.toLowerCase()));
      }
      if(this.searchObject.balance !== '') {
        users = users.filter(users => users.balance.toLowerCase().includes(self.searchObject.balance.toLowerCase()));
      }

      return users;
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.getWallets();
    this.getUsers();
    
    this.getUser();
  },

  methods: {
    
    async getWallets() {
          await axios.get("/api/wallets/")
          .then(response => {
              this.wallets = response.data.data
          })
          .catch(error => {
              console.log(error);
          });
    },
    async getUser() {
      this.user = this.$store.state.user
    },     
    async getUsers() {
          await axios.get("/api/usersList")
          .then(response => {                       
              this.users = response.data.data
              this.users.forEach(element => {
                element.active == 1 ? element.active = 'Active' : element.active = 'Inactive'
                element.type === 'u' ? element.type = 'User' : element.type === 'a' ?  element.type='Admin' : element.type='Operator'
                
                if(element.type === 'User'){

                  this.wallets.forEach(wallet => {
                    if(wallet.email === element.email){
                      wallet.balance > 0.00 ? element.balance = 'Has money' : element.balance = 'Empty'
                    }
                  });
                }else{
                  element.balance = ''
                }
                if(element.nif === null){
                  element.nif = ''
                }
              });              
          })
          .catch(error => {
              console.log(error);
          });
    },
    async editUser (item) {
      this.user_id_edit = this.users.indexOf(item) 
      
             
      this.editedUser = Object.assign({}, item)
      if(this.editedUser.id == this.user.id){

      } else{
          confirm('Are you sure you want to disable this user?') && this.updateUser()
      }
       
    }, 
    updateUser: async function(){
      
      if(this.editedUser.type === 'User' && this.editedUser.balance === 'Empty'){
      const formData = new FormData();
        this.editedUser.active === 'Active' ? formData.append('active', 0) : formData.append('active', 1)       

      const headers = { 'Content-Type': 'multipart/form-data'}
      
      await axios.post('api/users/editStatus/'+this.editedUser.id, formData, headers)
      .then(response=>{
      }).catch(error => {
      this.hasAlert = true
        console.log(error)
      });
      this.getUsers();}
      else{
        
          confirm('Disable only users with empty wallets') 
        
      }
    },
    deleteUser: async function (item) {
      this.user_id_edit = this.users.indexOf(item)       
             
      this.editedUser = Object.assign({}, item)
           
          confirm('Are you sure you want to delete this user?') &&  this.delete()
      
      
    },
    delete: async function (item) {
      if(!(this.editedUser.id === this.user.id) || this.editedUser.type === 'User'){
        await axios.put('api/users/delete/'+this.editedUser.id)
        .then(response=>{
          

        }).catch(error => {
          this.hasAlert = true
          console.log(error)
        });
        this.getUsers();

        } else{
          confirm('Delete only other admins or operators')
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
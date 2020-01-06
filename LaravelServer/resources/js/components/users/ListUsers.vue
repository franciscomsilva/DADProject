<template>
  <v-app id="inspire"  >
    <v-content>
      <v-container
        fill-height
        fill-width
      >
        <v-layout
          align-center
          justify-center
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
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteUser(item)"
        >
          delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="created()">Reset</v-btn>
      </template>
    </v-data-table>
    </v-card>
  </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
        { text: 'Actions', value: 'action', sortable: false },
        ],
        users: [],
        user:[],        
        selectedFile:null,
        editedIndex: -1,
        editedUser: {
            name: '',
            email: '',
            type: '',
            acive: '',
            photo:''
        },
        defaultUser: {
            name: '',
            email: '',
            type: '',
            acive: '',
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
      await axios.get("api/users/me")
      .then(response => {
        this.user = response.data.data
      })
      .catch(error => {
        console.log(error);
      });
    },     
    async getUsers() {
          await axios.get("/api/usersList")
          .then(response => {
              this.users = response.data.data
          })
          .catch(error => {
              console.log(error);
          });
    },
    async editUser (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedUser = Object.assign({}, item)
      this.dialog = true
    }, 
    deleteUser: async function (item) {
      const user_id = this.users.indexOf(item) +1
      console.log()
      confirm('Are you sure you want to delete this item?') &&  await axios.put('api/users/delete/'+user_id)
        .then(response=>{
          

        }).catch(error => {
          this.hasAlert = true
          console.log(error)
        });
        this.getUsers();
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
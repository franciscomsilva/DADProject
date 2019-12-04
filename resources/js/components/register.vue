<template>
<div id="app">
  <v-app id="inspire">
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
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                
                  </template>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <user-form></user-form>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.prevent="register()" >Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
  import UserForm from './userForm';

export default {
    data : function(){
        return  {
            name:null,
            email:null,
            password:null,
            passwordConfirmation:null,
            nif:null,
            selectedFile:null,
            type:'u',
            active: 1,
            rules: {
              required: value => !!value || 'Required.',
              counter: value => value == null || value.length <= 20 || 'Max 20 characters',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
              password: value => {
                  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/
                  return pattern.test(value) || 'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number. Min of 3 characters'
              },
              passwordConfirmation: value => value == null  || value == this.password || 'Passwords dont match.',
              nif: value => {
                  const pattern = /^([0-9]{9})+$/
                  return pattern.test(value) || 'Min of 9 characters'}
            },
            hasAlert:null
        }
    },
    methods:{
        register: async function (){
          this.hasAlert = false;

          if(!this.$refs.form.validate()){
            return;
          }
          const formData = new FormData();
            
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('password_confirmation', this.passwordConfirmation);     
            formData.append('type', this.type);
            formData.append('active', this.active);
            formData.append('nif', this.nif);
            
            if(this.selectedFile) formData.append('photo', this.selectedFile);
            const headers = { 'Content-Type': 'multipart/form-data'}

            await axios.post('api/register', formData, headers)
              .then(response=>{
              /*SAVE TOKEN IN SESSION*/
              const token = response.data.access_token
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token

              this.$router.push('/users')
             }).catch(error => {
                this.hasAlert = true
                console.log(error)
            });
        },
        onFileSelected(event){
          this.selectedFile = event.target.files[0]
        },
        
  },
  components:{
            'user-form':UserForm
        }
}
</script>
<style>

</style>
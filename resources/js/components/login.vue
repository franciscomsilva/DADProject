<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
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
                <v-toolbar-title>Login form</v-toolbar-title>
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
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text" v-model="email"
                    :rules="[rules.required, rules.counter,rules.email]"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password" 
                    v-model="password"
                    :rules="[rules.required,rules.password]"
                  
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-alert color="red"
              dense
             outlined
              type="error"
              v-if="hasAlert">Wrong username/password combination! </v-alert>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.prevent="login()" >Login</v-btn>
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
export default {
    data : function(){
        return  {
            email:null,
            password:null,
            rules: {
              required: value => !!value || 'Required.',
              counter: value => value == null || value.length <= 20 || 'Max 20 characters',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
              passsword: value => value == null || value.lenght < 8 || 'Minium of 8 characters'
            },
            hasAlert:null
        }
    },
    methods:{
        login: async function (){
          this.hasAlert = false;

          if(!this.$refs.form.validate()){
            return;
          }
              await axios.post('api/login', {
                email: this.email,
                password: this.password
            }).then(response=>{
              /*SAVE TOKEN IN SESSION*/
              const token = response.data.access_token
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token

              this.$router.push('/users')
             }).catch(error => {
                this.hasAlert = true
                    
            });
        }
  
  }
}
</script>

<style>

</style>
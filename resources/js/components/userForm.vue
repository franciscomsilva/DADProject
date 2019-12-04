<template>
     <div>
          <v-text-field
                    label="Name"
                    name="name"
                    prepend-icon="person"
                    type="text" v-model="name"
                    :rules="[rules.required, rules.counter]"
                  ></v-text-field>
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

         <v-text-field
                    id="passwordConfirmation"
                    label="Password Confirmation"
                    name="passwordConfirmation"
                    prepend-icon="lock"
                    type="password" 
                    v-model="passwordConfirmation"
                    :rules="[rules.required,rules.password,rules.passwordConfirmation]"
                  
        ></v-text-field>
        <v-text-field
                    id="nif"
                    label="NIF"
                    name="nif"
                    prepend-icon="lock"
                    type="number" 
                    v-model="nif"
                    :rules="[rules.required,rules.nif]"
                  
        ></v-text-field>
        <input type="file" @change="onFileSelected" >

     </div>
</template>
<script>
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
    }
}
</script>
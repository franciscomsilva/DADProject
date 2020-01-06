<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container
                        fluid
                        fill-height
                        fill-width>
                    <v-layout
                            align-center
                            justify-center>
                        <v-flex
                                xs12
                                sm8
                                md4>
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="primary"
                                        dark
                                        flat>
                                    <v-toolbar-title>Edit</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">

                                        </template>
                                    </v-tooltip>
                                </v-toolbar>
        <v-form ref="form">
        <v-text-field
                label="Name"
                name="name"
                prepend-icon="person"
                type="text" v-model="user.name"
                :rules="[ rules.required,rules.counter]"
        ></v-text-field>

        <v-text-field
                id="oldPassword"
                label="Old Password"
                name="oldPassword"
                prepend-icon="lock"
                type="password"
                v-model="oldPassword"
                :rules="[rules.requiredPassword]"
        ></v-text-field>

            <v-text-field
                    id="New Password"
                    label="New Password"
                    name="newPassword"
                    prepend-icon="lock"
                    type="password"
                    v-model="newPassword"
                    :rules="[rules.password,rules.requiredPassword]"
            ></v-text-field>

        <v-text-field
                id="passwordConfirmation"
                label="Password Confirmation"
                name="passwordConfirmation"
                prepend-icon="lock"
                type="password"
                v-model="newPasswordConf"
                :rules="[rules.passwordConfirmation,rules.requiredPassword]"
        ></v-text-field>
        <v-text-field
                v-if="user.nif"
                id="nif"
                label="NIF"
                name="nif"
                prepend-icon="lock"
                type="number"
                v-model="user.nif"
                :rules="[rules.nif]"

        ></v-text-field>
        <v-file-input
                v-model="photo"
                placeholder="Pick an avatar"
                prepend-icon="camera"
                label="Avatar"
        ></v-file-input>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-alert color="red"
                         dense
                         outlined
                         type="error"
                         v-if="hasAlert">{{errorMsg}}</v-alert>
                <v-btn color="primary" v-on:click.prevent="update()" >Update</v-btn>
            </v-card-actions>
        </v-form>
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
            passwordConfirmation:null,
            user: {
                name:"",
                email:"",
                type:"",
                active :0,
                nif: 0
            },
            selectedFile:null,
            name: null,
            oldPassword: null,
            newPassword:null,
            newPasswordConf:null,
            nif:null,
            errorMsg:null,
            rules: {
                required: value => !!value || 'Required.',
                requiredPassword: value => {
                    if((this.oldPassword != null && this.newPassword != null && this.newPasswordConf != null ) ||(this.oldPassword == null && this.newPassword == null && this.newPasswordConf == null)){
                        return true;
                    }
                    return 'Old and New Password required to change password';
                },
                counter: value => value == null || value.length <= 20 || 'Max 20 characters',
                password: value => {
                    if(value != null){
                        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/
                        return pattern.test(value) || 'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number. Min of 3 characters'
                    }
                },
                passwordConfirmation:value => value == null || value == this.newPassword || 'Passwords dont match.',
                nif: value => {
                    const pattern = /^([0-9]{9})+$/
                    return pattern.test(value) || 'Min of 9 characters'
                }
            },
            hasAlert:null
        }
    },
    mounted(){
        this.getUser();
    },
    methods: {
        async getUser() {
            await axios.get("api/users/me")
                .then(response => {
                    this.user = response.data.data;
                    console.log(this.user);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async update(){
            this.hasAlert = false;
            if(!this.$refs.form.validate()){
                return;
            }

            const formData = new FormData();

            formData.append('name', this.user.name);


            if(this.oldPassword != null && this.newPassword != null){
                formData.append('oldPassword', this.oldPassword);
                formData.append('newPassword', this.newPassword);
            }

            if(this.nif != null){formData.append('nif', this.user.nif)}

            console.log(this.photo)
            if(this.photo) formData.append('photo', this.photo);
            const headers = { 'Content-Type': 'multipart/form-data'}


            console.log(formData)
            await axios.post(`api/users/${this.user.id}`, formData,headers)
                .then(response=>{
                    this.$store.commit('setUser',response.data);
                    this.errorMsg = "Updated with success!";
                    this.hasAlert = true;
                    this.$router.push('/home');
                }).catch(error => {
                    this.errorMsg = "Error updating profile!";
                    this.hasAlert = true;
                    console.log(error)
                });



        }
    }
    
}
</script>
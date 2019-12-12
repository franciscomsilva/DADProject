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
                type="text" v-model="name"
                :rules="[rules.required, rules.counter]"
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
        <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                @change="onFileSelected" />

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
            name:null,
            password:null,
            passwordConfirmation:null,
            nif:null,
            selectedFile:null,
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value == null || value.length <= 20 || 'Max 20 characters',
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
    methods: {
        mounted(){
            this.getUsers();
        },
        getUsers(){

        },
    }
    
}
</script>
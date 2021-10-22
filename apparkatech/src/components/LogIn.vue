<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Iniciar sesión</h2>
            
            <form action @submit.prevent="proccesLogInUser">
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name: "LogIn",

    data: function(){
        return{
            user: {
                username:"",
                password:"",
        
            }
        }
    },
    methods: {
        proccesLogInUser: function(){
            axios.post(
                "http://127.0.0.1:8000/login/",
                {email:this.user.username, password:this.user.password},
                {headers:{}}
                )
                .then((result) => {
                    console.log(result);
                    let dataLogIn = {
                       
                        token_access:result.data.access,
                        token_refresh:result.data.refresh,
                    }

                    this.$emit('completedLogIn' , dataLogIn)

                })
                .catch((error)=>{
                    console.log(error);

                    if (error.response.status = "401")
                    alert("Error 401: Credenciales incorrectas");
                });
        }
    }
}
</script>
<style>
   
   .logIn_user{
       margin: 0;
       padding: 0%;
       height: 100%;
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
    }

    .container_logIn_user {
        border: 3px solid #152f4b;
        border-radius: 10px;
        width: 25%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .logIn_user h2{
        color: #8497ac;
    
    }

    .logIn_user form{
        width: 70%;
    }

    .logIn_user input{
        height: 40px;
        width: 80%;

        color: #90AFC5;
        background: #283747;
        border: 1px solid #90AFC5;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    
    .logIn_user button:hover{
        color: #E5E7E9;
        background: rgb(27, 25, 26);
        border: 1px solid #283747;
    }
</style>


    
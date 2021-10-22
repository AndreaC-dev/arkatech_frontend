<template>
    
    <div class="signUp_user">
        <h2>Registro de usuario</h2>
        
        <div class="container_signUp_user">
            <form  class="form" v-on:submit.prevent="processSignUp" >
            <div class="container_signUp_user_left">
                
                <p class="text_user">Usuario</p>
                <input type="text" v-model="user.nombre" >
                <br>
                <p class="text_user">Contraseña</p>
                <input type="password" v-model="user.password" id ="password"  required>
                <br>
                <!--<input type="password"  id ="confirm_password"  required>-->
                
                
                
                
                <button  class="button_reg" type="submit">Registrarse</button>
                
            </div>
            <div class="container_signUp_user_right">
              
                <p class="text_user">Nombre</p>
                <input type="text" v-model="user.apellido" >
                <br>
                <p class="text_user">Email</p>
                <input type="email" v-model="user.email" required>
                <br>

                

                <button class="button_cancel" type="reset">Cancelar</button>
                
            </div>
         </form> 
        </div>
        
    </div>

    

</template>




<script type="text/javascript">
import axios from 'axios';



export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                email: "",
                nombre: "",
                apellido: "",
                password: "",   
            }
        }
    },

    methods: {
        processSignUp: function(){
            axios.post(
                "http://127.0.0.1:8000/user/", 
                this.user,  
                {headers: {}}
            )
                .then((result) => {
                    let dataSignUp = {
                        
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    
                    this.$emit('completedSignUp', dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ErroR en el resgistro.");
                    
                    
                });
        }
    }
}
/*var txt_password = document.getElementById("password")
var txt_confirm_password =document.getElementById("confirm_password")
 function validatePassword(){

     if(txt_password != txt_confirm_password){
         confirm_password.setCustomValidity("Passwords Don't Match");
     } else {
    confirm_password.setCustomValidity('');
    }
     password.onchange = validatePassword;
     confirm_password.onkeyup = validatePassword;
 }    */   
    

</script>








<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .form {
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
    }
    .container_signUp_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 60%;
        height: 45%;
        
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
        
    }
    .container_signUp_user_left {
        
        width: 80%;
        height: 60%;
        
        margin-top: 3%;
        margin-bottom: 10%;
        margin-left: 15%;
        margin-right: 30%;
    }
    .container_signUp_user_right {
        
        width: 80%;
        height: 60%;
        margin-top: 3%;
        margin-bottom: 10%;
        margin-left: 20%;
        margin-right: 40%;
        
        
    }

    .signUp_user h2{
        color: #283747;

    }

    .signUp_user form{
        width: 60%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 200%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 10px;

        border: 1px solid #283747;
    }
    .button_reg{
         width: 200%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        border-radius: 10px;
    }

    .button_reg button{
        width: 200%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        border-radius: 10px;
    }
    

    .button_reg button:hover{
        color: #E5E7E9;
        background: #10161C;
        border: 2px solid #A9AFB5;
    }
    .button_cancel{
        width: 200%;
        height: 40px;

        color: #E5E7E9;
        background: crimson;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        border-radius: 10px;
    }
    .button_cancel button{
        width: 200%;
        height: 40px;

        color: #E5E7E9;
        background: crimson;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        border-radius: 10px;
    }
    .button_cancel button:hover{
        color: #E5E7E9;
        background: #10161C;
        border: 2px solid #A9AFB5;
    }
    .text_user {

        text-align: left;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 0px;
    }

</style>
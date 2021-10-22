<template>
  <div id="app" class="app">
  <div class="header">
      <h1 class="justify-content">Arkatech</h1>
  <nav>
    <form class="form-inline justify-content">
  <button class="left" v-on:click="loadHome">Inicio</button>
  <button class="left" v-on:click="loadCatalogo">Catálogo</button>
  <button class= "left" v-if="is_auth" v-on:click="logOut"> Cerrar Sesión</button>
      <input class="form-control mr-sm-2" type="search" placeholder="Qué estás buscando" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <button id="login" v-if="!is_auth" v-on:click="loadLogIn">Ingresar</button>
      <button id="signup" v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      <button v-on:click="loadProductDetail" id="prodetail">Producto detalle</button>
  </form>
  </nav>
  </div>

  <div class="main-component">
      <router-view
      v-on:loadHome="loadHome"
      v-on:loadCatalogo="loadCatalogo"
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
      v-on:logOut="logOut"
      >
      </router-view>

    </div>
  <footer class="footer"> Copyright @2021 Arkatech. Todos los derechos reservados
 <br>
  Desarrollado por: Andrea Cardenas, Alejandro Carmona, David Nuñez, Diego Sánchez, José Rondón, Willinton Ascancio
  </footer>
    </div>
</template>
<script>
import Catalogo from './components/Catalogo.vue'
export default {
  name: 'App',
  components: {
  Catalogo
},
  data: function(){
    console.log(localStorage.getItem("isAuth"))
    if(localStorage.getItem("isAuth") == true)
      return{is_auth: true};
    else
      return{
      is_auth: false
    };
  },

methods:{
  verifyAuth: function() {
    this.is_auth = localStorage.getItem("isAuth") || false;
    if(this.is_auth == false)
    this.$router.push({name: "logIn"});
    else
     this.$router.push({ name: "home"});
  },
  loadLogIn: function(){
    this.$router.push({name: "logIn"})
  },
  loadSignUp: function(){
    this.$router.push({name: "signUp"})
   },
   completedLogIn: function(data) {
     localStorage.setItem("isAuth", true);
     localStorage.setItem("username", data.username);
     localStorage.setItem("token_access", data.token_access);
     localStorage.setItem("token_refresh", data.token_refresh);
     alert("Autenticación Exitosa");
     this.verifyAuth();
   },
   loadCatalogo: function(){
       this.$router.push({name: "catalogo"})
   },
   completedSignUp: function(data) {
     alert("Registro Exitoso");
     this.completedLogIn(data);
   },
   loadHome: function() {
     this.$router.push({ name: "home"});
   },
   logOut: function(){
     localStorage.clear();
     alert("Sesion Cerrada");
     this.verifyAuth();
   },
       loadProductDetail: function(){
      this.$router.push({name: "productDetail"})
    },
 }, 
 }
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #1e917afd;
  color: white;
  text-align: center;
  font-family: sans-serif;
}

.header{
  margin:0;
  padding:10;
  width:100%;
  background-color:#1e917afd;
  height: 10vh;
  min-height: 100px;
  text-align: center;
  font-family: sans-serif;
  color: white;

}
.header h1{
    width: 30%;
    text-align: center;
}


input{
height: 30px;
width: 200px;
margin-left :10px;

}
.left {
text-align:left;
margin-left :5px;
margin-right :5px;
background-color: #283747; 
color:white;
height: 30px;
border-radius: 10%;
width: 150px;}


#signup,#login,#prodetail {
text-align:right;
margin-left :5px;
margin-right :5px;
background-color: #283747; 
color:white;
height: 30px;
border-radius: 10%;
width: 150px;}

.header h1{
text-align:left;}

body{
  background: #EBE0E4;
}

.justify-content{
  color: black;
}


.mitad{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:column;
        justify-content: center;
        text-align: center;
        
}

.mitad1{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:row;
        justify-content: center;
        text-align: center;

        
}



.mitad2{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:row;
        justify-content: center;
        text-align: center;
        
}

.productos{
  font-family: sans-serif;
  height: 310px;
  width: 530px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  margin-top:10px;
  margin-bottom: 20px;
  margin-right: 50px;
  display: flex;
        flex-direction:column ;
  text-align: center;
  border: 2px solid black
}



.imagen{
  height: 55%;
  width: 55%;
  margin: top 10px;
  margin-bottom:15px;
  margin-left: 20%;
  margin-right: 20%;
  
}

.Botones{
background-color: rgba(31, 187, 140, 0.932);
border-radius: 10px;
}
  
.Botones button{
  background-color: red;
  border-radius: 50px;
  margin-top: 50%;
}  



</style>
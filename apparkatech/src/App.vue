<template>
  <div id="app" class="app">
  <div class="header">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >Arkatech</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" v-on:click="loadHome">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="loadCatalogo">Catálogo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="is_auth" v-on:click="logOut"> Cerrar Sesión</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Qué estás buscando" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" id="login" v-if="!is_auth" v-on:click="loadLogIn">Ingresar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="!is_auth" v-on:click="loadSignUp">Registrarse</a>
      </li>
    </ul>
  </div>
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

body{
  background: #EBE0E4;
}


.a{
  background-color: red;
  border-radius: 50px;
  margin-top: 50%;
}  

</style>
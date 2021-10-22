<template>
  <div id="app" class="app">
  <div class="header">
      <h1 class="justify-content">Arkatech</h1>
  <nav>
    <form class="form-inline justify-content">
  <button class="left">Inicio</button>
  <button class="left">Categorías</button>
  <button class="left">Quienes somos</button>
      <input class="form-control mr-sm-2" type="search" placeholder="Qué estás buscando" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <button id="login">Ingresar</button>
  <button id="signup">Registrarse</button>
  <button v-on:click="loadProductDetail" id="prodetail">Producto detalle</button>
  </form>
  </nav>
  </div>
  <div class="main-component">
    <router-view>
    </router-view>
    </div> 
  </div>
  <body></body>
  <footer class="footer">
  Copyright @2021 Arkatech. Todos los derechos reservados
  <br>
  Desarrollado por: Andrea Cardenas, Alejandro Carmona, David Nuñez, Diego Sánchez, José Rondón, Willinton Ascancio
  </footer>
</template>

<script>
export default {
  name: 'App',

  data: function(){
    return{
      }
  },

  components: {
  },

  methods:{
    loadProductDetail: function(){
      this.$router.push({name: "productDetail"})
    },
  },

  created: function(){
  }
}
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #283747;
  color: white;
  text-align: center;
  font-family: sans-serif;
}
.header{
  text-align: center;
  font-family: sans-serif;
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

</style>

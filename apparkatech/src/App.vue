<template>
  <div id="app" class="app">
    <div class="container_navbar">
      <div class="navbar">
        <h1 style="margin-left: 3%">ARKATECH</h1>
        <ul>
          <li><a href="" v-on:click="loadHome"> Inicio </a></li>
          <li><a href="" v-on:click="loadCatalogo"> Catálogo </a></li>
          <li v-if="is_auth">
            <form>
              <div>
                <input
                  type="search"
                  class="search-bar"
                  placeholder="Ingresa el número de tu orden de compra"
                />
                <button class="search-btn" v-on:click="loadInvoice">Search</button>
              </div>
            </form>
          </li>
        </ul>
        <div v-if="is_auth">
          <ul style="">
            <li><a href="" v-on:click="logOut"> Cerrar Sesión </a></li>
          </ul>
        </div>
        <div v-else>
          <ul>
            <li><a href="" v-on:click="loadLogIn"> Ingresar </a></li>
            <li><a href="" v-on:click="loadSignUp"> Registrarme </a></li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>Copyright @2021 Arkatech. Todos los derechos reservados</p>
      <br />
      Desarrollado por: Andrea Cardenas, Alejandro Carmona, David Nuñez, Diego
      Sánchez, José Rondón, Wilinton Ascanio, Jimilgton Soto
    </footer>
    <div class="main-component">
      <router-view
        v-on:loadHome="loadHome"
        v-on:loadCatalogo="loadCatalogo"
        v-on:loadInvoice ="loadInvoice"
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
  </div>
</template>
<script>
import Catalogo from "./components/Catalogo.vue";
export default {
  name: "App",
  components: {
    Catalogo,
  },
  data: function () {
    console.log(localStorage.getItem("isAuth"));
    if (localStorage.getItem("isAuth") == true) return { is_auth: true };
    else
      return {
        is_auth: false,
      };
  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    loadCatalogo: function () {
      this.$router.push({ name: "catalogo" });
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    loadInvoice: function () {
      this.$router.push({ name: "invoice" });
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesion Cerrada");
      this.verifyAuth();
    },
    loadProductDetail: function () {
      this.$router.push({ name: "productDetail" });
    },
  },
};
</script>

<style>
:root {
  --white-light: rgba(255, 255, 255, 0.5);
  --alice-blue: #f8f9fa;
  --carribean-green: #40c9a2;
  --gray: #ededed;
}

html {
  min-height: 100%;
  position: relative;
}

body {
  margin: 0;
  margin-bottom: 40px;
}

footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #1e917afd;
  color: white;
  text-align: center;
  font-family: sans-serif;
  padding: 20px 0;
}

.container_navbar {
  width: 100%;
  height: auto;
  background-color: #1e917afd;
}

.navbar {
  width: 85%;
  margin: auto;
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 130px;
  cursor: pointer;
}

.navbar ul li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  position: relative;
}

.navbar ul li a {
  text-decoration: none;
  color: white;
  font-family: Roboto, "sans-serif";
  font-size: 1.2rem;
}

.navbar ul li::before {
  content: "";
  height: 3px;
  width: 0%;
  background: yellowgreen;
  position: absolute;
  left: 0;
  bottom: -12px;
  transition: 0.4s ease-out;
}

.navbar ul li:hover::before {
  width: 100%;
}

.search-btn {
 
 
  border-right-color: #629AB2;
  border-top-color: #629AB2;
  border-bottom-color: #629AB2;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-width: 3px;
  font: helvetica;
}
.search-bar{
  border: none;
  
  
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 30px;
  width: 600px  
}
.search-bar placeholder{
  padding: 5px;
  float: left;
  margin-top: 10px;
  color: #999;
  font-style: italic;
  font-weight: thin;

}
</style>
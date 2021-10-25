<template>
  <div id="app" class="app">
    <div class="container_navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <h1 class>Arkatech</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="box">
              <div class="container-1">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input
                  type="search"
                  id="search"
                  placeholder="Que estás buscando..."
                />
              </div>
            </div>
          </form>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a
                class="nav-link"
                id="login"
                v-if="!is_auth"
                v-on:click="loadLogIn"
                >Ingresar</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!is_auth" v-on:click="loadSignUp"
                >Registrarse</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="is_auth" v-on:click="logOut">
                Cerrar Sesión</a
              >
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
        v-on:loadProductDetail="productDetail"
      >
      </router-view>
    </div>
    <footer>
      Copyright @2021 Arkatech. Todos los derechos reservados
      <br />
      Desarrollado por: Andrea Cardenas, Alejandro Carmona, David Nuñez, Diego
      Sánchez, José Rondón, Willinton Ascancio, Jimilgton Soto
    </footer>
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
    if (localStorage.getItem("isAuth")) return { is_auth: true };
    else
      return {
        is_auth: false,
      };
  },
  mounted() {
    let recaptchaScriptQuery = document.createElement("script");
    recaptchaScriptQuery.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.5.1.slim.min.js"
    );
    document.head.appendChild(recaptchaScriptQuery);
    let recaptchaScriptBootstrap = document.createElement("script");
    recaptchaScriptBootstrap.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
    );
    document.head.appendChild(recaptchaScriptBootstrap);
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
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesion Cerrada");
      this.verifyAuth();
    },
  },
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
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

footer {
  position:absolute;
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
  position: relative;
}

.navbar {
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.container-1 {
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}

.container-1 input#search {
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: none;
  font-size: 10pt;
  float: left;
  color: #020508;
  border-radius: 20px;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.navbar-collapse {
  padding-left: 5vw;
}

.container-1 input#search::-webkit-input-placeholder {
  color: #65737e;
}

.container-1 input#search:-moz-placeholder {
  /* Firefox 18- */
  color: #65737e;
}

.container-1 input#search::-moz-placeholder {
  /* Firefox 19+ */
  color: #65737e;
}

.container-1 input#search:-ms-input-placeholder {
  color: #65737e;
}

.container-1 .icon {
  position: absolute;
  top: 50%;
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #4f5b66;
}
</style>
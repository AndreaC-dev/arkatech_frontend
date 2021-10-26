<template>

<div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <body>
    <div class="login-box">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKT-Logo-Design-Graphics-3386288-1.jpg"
        class="logo"
        alt="Logo Image"
      />
      <h1>Login</h1>
      <form action @submit.prevent="proccesLogInUser">
        <label for="username">Correo Electrónico</label>
        <input type="email" v-model="user.username" placeholder="Enter Email" />
        <label for="password">Contraseña</label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Iniciar Sesion" />
      </form>
      </div>
   </body> 
  </div>
  

  
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    proccesLogInUser: function () {
      axios
        .post(
          "http://127.0.0.1:8000/login/",
          { email: this.user.username, password: this.user.password },
          { headers: {} }
        )
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          console.log(error);

          if ((error.response.status = "401"))
            alert("Error 401: Credenciales incorrectas");
        });
    },
  },
};
</script>

<style>


.login-box {
  width: 450px;
  height: 320px;
  background: rgba(0, 0, 0, 0.719);
  color: #fff;
  border-radius: 10%;
  transform: translate(-50%, -50%);
  top: 61%;
  left: 50%;
  position:fixed;
  background-color: #eff0f1;
 
}

.login-box .logo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: fixed;
  top: -40px;
  left: calc(50% - 50px);
}


.login-box h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 26px;
  color: #1bba93
}

.login-box label {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  display: block;
  color: #1bba93;
}

.login-box input {
  width: 100%;
  margin-bottom: 20px;
}

.login-box input[type="email"],
.login-box input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: rgb(52, 52, 54);
  font-size: 17px;
}

.login-box input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #1bba93;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 5vh;
}

.login-box input[type="submit"]:hover {
  cursor: pointer;
  background: #0ae9b1;
  color: #000;
}

</style>


    
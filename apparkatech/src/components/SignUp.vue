<template>
<div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <body>
  <form class="form-group" action v-on:submit.prevent="processSignUp">
    <div class="form-header">
      <h1>Registrar Usuario</h1>
    </div>
    <div class="form-body">
      <div class="horizontal-group">
        <div class="form-group left">
          <label for="firstname" class="label-title">Nombre *</label>
          <input
            type="text"
            class="form-input"
            placeholder="Enter your first name"
            required="required"
            v-model="user.nombre"
          />
        </div>
        <div class="form-group right">
          <label for="lastname" class="label-title">Apellido *</label>
          <input
            type="text"
            v-model="user.apellido"
            class="form-input"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="label-title">Email *</label>
        <input
          type="email"
          v-model="user.email"
          class="form-input"
          placeholder="Enter your email"
          required="required"
        />
      </div>
      <div class="horizontal-group">
        <div class="form-group left">
          <label for="password" class="label-title">Contraseña *</label>
          <input
            type="password"
            v-model="user.password"
            class="form-input"
            placeholder="Enter your password"
            required="required"
          />
        </div>

        <div class="form-group right">
          <label for="confirm-password" class="label-title"
            >Confirma tu contraseña *</label
          >
          <input
            type="password"
            class="form-input"
            v-model="user.confirmPassword"
            placeholder="Confirm your password"
            required="required"
          />
          
        
        </div> 
         
      </div>
      <div class="form-footer end">
      <label>* required</label>
      <button class="btn btn-danger return" v-on:click="loadCatalogo">Regresar</button>
   <button type="submit" class="btn btn-success boton">Registrarme</button>
    </div>
    </div>
    
    
  </form>
  </body>
</div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  name: "SignUp",
  data: function () {
    return {
      user: {
        email: "",
        nombre: "",
        apellido: "",
        password: "",
      },
    };
  },
  methods: {
    processSignUp: function () {
      if (this.user.password != this.user.confirmPassword) {
        alert(
          "Las contraseñan no coinciden, por favor revisalas y vuelve a intentarlo"
        );
      } else {
        axios
          .post("https://arckatech-be.herokuapp.com/user/", this.user, { headers: {} })
          .then((result) => {
            let dataSignUp = {
              username: this.user.email,
              token_access: result.data.access,
              token_refresh: result.data.refresh,
            };
            this.$emit("completedSignUp", dataSignUp);
          })
          .catch((error) => {
            console.log(error);
            alert("Error en el resgistro.");
          });
      }
    },
        loadCatalogo: function () {
      this.$router.push({ name: "catalogo"});
    },
  },
};
</script>

<style scoped>
@import url("httpss://fonts.googleapis.com/css?family=Roboto");

.signup-form {
  font-family: "Roboto", sans-serif;
  width: 650px;
  margin: 30px auto;
  border-radius: 10px;
  background: linear-gradient(to right, #ffffff 0%, #fafafa 50%, #ffffff 99%);
}

.form-header {
  background-color: #eff0f1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.form-header h1 {
  font-size: 30px;
  text-align: center;
  color: #666;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
  font-weight: bold;
}

.form-body {
  padding: 10px 40x;
  margin: 5% 3% 20% 3%;
  color: #666;
}



.form-body .label-title {
  color: #6a4892;
  font-size: 17px;
  font-weight: bold;
}

.form-body .form-input {
  font-size: 17px;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  color: #333333;
  text-align: left;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  background: white;
  outline: none;
}

.horizontal-group .left {
  float: left;
  width: 49%;
}

.horizontal-group .right {
  float: right;
  width: 49%;
}


input[type="file"] {
  outline: none;
  cursor: pointer;
  font-size: 17px;
}

#range-label {
  width: 15%;
  padding: 5px;
  background-color: #6a4892;
  color: white;
  border-radius: 5px;
  font-size: 17px;
  position: relative;
  top: -8px;
}
.boton {
  background-color: #709248;
}

::-webkit-input-placeholder {
  color: #d9d9d9;
}
.form-prefooter {
  margin-bottom: 10px;
  
  display: flex;
  justify-content:left;
  clear: both;
}
.form-prefooter span {
  float: left;
  font-weight: bold;
  color: #999;
  font-style: italic;
  font-weight: thin;
}
.form-footer {
  clear: both;
  float: right;
  margin-bottom: 130px;
}

.signup-form .form-footer {
  background-color: #eff0f1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #cccccc;
}

.form-footer label {
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  color: #999;
  font-style: italic;
  font-weight: thin;
}

.return{
  margin-left: 10px;
  background-color:#92484B;
}

.btn:hover {
  color: white;
}
@media only screen and (max-width: 400px){
.form-body .label-title {
  color: #6a4892;
  font-size: 13px;
  font-weight: bold;
}
.form-body .form-input {
  font-size: 13px;

}
}
</style> 
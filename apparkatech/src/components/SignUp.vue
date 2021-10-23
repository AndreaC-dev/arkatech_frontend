<template>
  <form class="signup-form" action v-on:submit.prevent="processSignUp">
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
            placeholder="enter your full name"
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
            placeholder="enter your last name"
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
          placeholder="enter your email"
          required="required"
        />
      </div>
      <div class="horizontal-group">
        <div class="form-group left">
          <label for="password" class="label-title">Password *</label>
          <input
            type="password"
            v-model="user.password"
            class="form-input"
            placeholder="enter your password"
            required="required"
          />
        </div>

        <div class="form-group right">
          <label for="confirm-password" class="label-title"
            >Confirm Password *</label
          >
          <input
            type="password"
            class="form-input"
            v-model="user.confirmPassword"
            placeholder="enter your password again"
            required="required"
          />
        </div>
      </div>
    </div>
    <div class="form-footer">
      <span>* required</span>
      <button type="submit" class="btn">Registrarme</button>
    </div>
  </form>
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
          .post("http://127.0.0.1:8000/user/", this.user, { headers: {} })
          .then((result) => {
            let dataSignUp = {
              username: this.user.email,
              token_access: result.data.access,
              token_refresh: result.data.refresh,
            };
            console.log(dataSignUp);
            this.$emit("completedSignUp", dataSignUp);
          })
          .catch((error) => {
            console.log(error);
            alert("ErroR en el resgistro.");
          });
      }
    },
  },
};
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
}

.form-body {
  padding: 10px 40x;
  margin: 5% 3% 20% 3%;
  color: #666;
}

.form-group {
  margin-bottom: 20px;
}

.form-body .label-title {
  color: #1bba93;
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
  background-color: #1bba93;
  color: white;
  border-radius: 5px;
  font-size: 17px;
  position: relative;
  top: -8px;
}

::-webkit-input-placeholder {
  color: #d9d9d9;
}

.form-footer {
  clear: both;
}

.signup-form .form-footer {
  background-color: #eff0f1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 40px;
  text-align: right;
  border-top: 1px solid #cccccc;
}

.form-footer span {
  float: left;
  margin-top: 10px;
  color: #999;
  font-style: italic;
  font-weight: thin;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1bba93;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  color: #bcf5e7;
  cursor: pointer;
}

.btn:hover {
  background-color: #169c7b;
  color: white;
}
</style> 
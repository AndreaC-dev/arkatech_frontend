<template>
<div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <div class=jumbotron>
          <img
        src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKT-Logo-Design-Graphics-3386288-1.jpg"
        class="logo"
        alt="Logo Image"
      />
    <div class="row last1">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Estás Registrado?</h5>
        <a href="#" class="btn success"  v-on:click="loadLogIn">Ingresa</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Aún no estás registrado?</h5>
        <a href="#" class="btn success" v-on:click="loadSignUp">Regístrate</a>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
export default {
    name: "Home",
    data: function(){
        return {

        }
    },
methods:{
    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
}}
</script>

<style>
    .last1{
      margin-bottom: 50px;
    }

    @media only screen and (max-width: 400px) {
        .greetings h1{
        font-size: 2.3rem;
        color: #283747;
        }
    }
</style>
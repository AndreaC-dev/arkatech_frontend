<template>
<body>
  <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <div class="container">
    <div class="left-column">
      <img
        class="active"
        v-bind:src="producto.imagen"
        v-bind:alt="producto.nombre"
      />
    </div>
    <div class="right-column">
      <div class="product-description">
        <h3> {{ producto.marca }} </h3>
        <h1>{{ producto.nombre }}</h1>
        <p>{{ producto.descripcion }}</p>
      </div>
      <div class="stock">
        <h3>Stock</h3>
        <p>{{ producto.inventario }}</p>
      </div>
      <div class="product-price">
        <div>
          <h3>Precio:</h3>
          <p class="price" name="precio"> {{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 2}).format(producto.precioUnitario*(1+(producto.iva)/100))}} 
          </p>
        <p id="s1"><small>*iva incluido</small></p> 
        </div>
      </div>
      <form v-on:submit.prevent="processOrder">
      <div class="form-group">
        <h3>Cantidad</h3>
        <input type="number" placeholder="Cantidad a comprar" name="cantidad">
      </div>
      <div class="justify-center col-6">
        <button type="submit" class="cart-btn">Comprar</button>
        <button class="return me-1 me-1" v-on:click="loadCatalogo">Regresar</button>
      </div>
      </form>
    </div>
      </div>
  </div>
</body>
</template>

<script>
import axios from "axios";
import jwt_decode from 'jwt-decode';

export default {
  name: "ProductDetail",
  data: function() {
    return {
      id: this.$route.params.id,
      producto: {},
      is_auth: localStorage.getItem("token_refresh"),
      order: {
            usuarioId : 0,
            productoId : 0,
            precioTotal:0,
            cantidad: 0
        },
    };
  },
  methods: {
    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    loadCatalogo: function () {
      this.$router.push({ name: "catalogo"});
    },
    processOrder: async function(submitEvent){
      if(localStorage.getItem("token_refresh") === null || localStorage.getItem("token_access") === null) {
          this.$emit("logOut");
          this.$router.push({ name: "home"});
          return;
      }
      await this.verifyToken();
      let token  = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();
      this.order.usuarioId = userId;
      this.order.productoId = this.id;
      this.order.cantidad = submitEvent.target.elements.cantidad.value;
      this.order.precioTotal = ((this.producto.precioUnitario*(this.order.cantidad))*(1+(this.producto.iva)/100))
      axios.post(
          'http://localhost:8000/order/',
          this.order,
          {headers: {'Authorization': `Bearer ${token}`}}
      )
      .then((result) => {
        let dataOrder={
          numero: result.data.numero,
          fecha: result.data.fecha,
          usuario: result.data.user,
          producto: result.data.product,
          cantidad: result.data.cantidad,
          descuento: result.data.descuento,
          precioTotal: result.data.precioTotal,
        }
          this.$emit("completedOrder",dataOrder);
      })
      .catch((error) => {
          console.log("Error");
          if(error.response.status == "401") {
              alert("Usted no está autorizado para realizar esta operación.");
          }
          else if(error.response.status == "400"){
              alert("La compra no se pudo procesar correctamente.\nRevise todos los datos e intente de nuevo.");
          }
      })
    },
    verifyToken: async function(){
      return axios.post(
              'http://localhost:8000/refresh/',
              {refresh: localStorage.getItem("token_refresh")},
              {headers:{}}
          )
          .then((result) => {
              console.log("New access token");
              localStorage.setItem("token_access", result.data.access);
          })
          .catch((error) => {
              this.$emit("logOut");
          })
    },
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/product/${this.id}/`)
      .then((response) => {
        this.producto = response.data;
      })
      .catch((error) => {
        console.log(error);
        if ((error.response.status = "404"))
          alert("Error 404: No hay productos");
      });
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
  margin-bottom: 90px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #E1E8EE;
}
.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  width: 35%;
  align-items: center;
  justify-content: center;
}
.left-column img {
  display:flex;
  height:80%;
  width:80%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}

.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

.stock {
  margin-bottom: 20px;
  border-bottom: 1px solid #E1E8EE;
}

.stock span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

.price {
  font-size: 120%;
  align-items: column;
}
 
.cart-btn {
  float: left;
  background-color: #28a745;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #2a6908;
}
.return {
  margin-left: 2vh;
  float:right;
  background-color: red;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.return:hover {
  background-color: #bd1913;
}
h3{
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.registro{
  margin-left: -30px;
}
@media only screen and (max-width: 400px) {
  .left-column img.active {
    height:200px
    
  }
  .product-description p{
    font-size: 10px !important;
  }
  .product-price p{
    font-size: 15px !important;
  }
  .product-description h1{
    font-size: 30px;
  }
  .cart-btn {
    display: inline;
  float:right;
  background-color: #28a745;
  font-size: 10px;
  color: #FFFFFF;

  transition: all .5s;
  text-align: center;

}
.cart-btn:hover {
  background-color: #2a6908;
}
.return {
  display: inline;
  float:left;
  background-color: red;
  font-size: 10px;
  color: #FFFFFF;
  transition: all .5s;
}
.container{
  margin-bottom: 150px;
}
}
</style>
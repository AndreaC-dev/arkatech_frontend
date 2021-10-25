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
          <p class="price"> {{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 2}).format(producto.precioUnitario+producto.iva)}} 
          </p>
        <p id="s1"><small>*iva incluido</small></p> 
        </div>
      </div>
      <div class="form-group">
        <h3>Cantidad</h3>
        <input type="quantiy" placeholder="1" class="form-control quantity">
      </div>
      <br>
      <div class="justify-center">
        <button class="cart-btn" v-on:click="loadLogIn">Comprar</button>
        <button class="return" v-on:click="loadCatalogo">Regresar</button>
      </div>
    </div>
      </div>
  </div>
</body>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      id: this.$route.params.id,
      producto: {},
    };
  },
  methods: {
    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    loadCatalogo: function () {
      this.$router.push({ name: "catalogo"});
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  display: inline-block;
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
  display: inline-block;
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
</style>
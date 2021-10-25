<template>
  <main class="container">
    <div class="left-column">
      <img
        class="active"
        v-bind:src="producto.imagen"
        v-bind:alt="producto.nombre"
      />
    </div>
    <div class="right-column">
      <div class="product-description">
        <span> {{ producto.marca }} </span>
        <h1>{{ producto.nombre }}</h1>
        <p>{{ producto.descripcion }}</p>
      </div>
      <div class="stock">
        <span>Stock</span>
        <h3>{{ producto.inventario }}</h3>
      </div>
      <div class="product-price">
        <span> Precio: {{ new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 2}).format(producto.precioUnitario) }} </span>
      </div>
      <center>
        <a href="" class="cart-btn">Comprar</a>
      </center>
    </div>
  </main>
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
  margin-top: 60px;
}
.left-column img {
  width: 100%;
  position: absolute;
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

.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 40px;
  color: #1f3f58;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
 
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}
</style>
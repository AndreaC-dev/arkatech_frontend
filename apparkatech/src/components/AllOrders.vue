<template>
    <body>
        <div id="containergrande" class="row row-cols-1 row-cols-md-7 g-7"> 
            <div class="containerOrders">
                <h1 class="lg-title">Ordenes de Compra</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div v-for="order in orders" :key="order.numero" class="card-group">
                        <div class="card">
                            <div class="card-header">
                              <h5 class="card-title">Orden: {{order.numero}}</h5>
                            </div>
                            <div class="card-body">
                              <p class="card-text">Producto: {{order.product.nombre}}</p>
                              <p class="card-text">Cantidad: {{order.cantidad}}</p>
                              <div>
                                <a href="#" v-on:click="loadOrder(order.user.id,order.numero)" class="btn btn-primary">ver</a>
                                <a href="#" v-on:click="loadUpdateOrder(order.user.id,order.numero)" class="btn btn-primary">Actualizar</a>
                                <a href="#" v-on:click="loadUpdateOrder()" class="btn btn-primary">Eliminar</a>
                                
                              </div>
                            </div>             
                            <div class="card-footer">
                              <small class="text-muted">{{order.fecha}}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button id="return" class="return me-1 me-1" v-on:click="loadCatalogo">Regresar</button>
                </div>
            </div> 
       </div>    
    </body>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "AllOrders",
  data: function () {
    return {
      orders: [],
      order: 0,
    };
  },

  methods: {
    loadCatalogo: function () {
      this.$router.push({ name: "catalogo"});
    },
    loadOrder: function (id_u,id_o) {
        this.$router.push({name: "order", params: {id_u:id_u, id_o:id_o}})
    },
    loadUpdateOrder: function (id_u,id_o) {
        this.$router.push({name: "updateorder", params: {id_u:id_u, id_o:id_o}})
    },
    
    getorders: async function () {
      if (
        localStorage.getItem("token_refresh") === null ||
        localStorage.getItem("token_access") === null
      ) {
        console.log();
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`http://localhost:8000/orders/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          console.log(result.data);
          this.orders = result.data;
          console.log(result);
        })
        .catch((error) => {
          this.$emit("logOut");
        });
    },

    verifyToken: async function () {
      return axios
        .post(
          "http://localhost:8000/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch((error) => {
          this.$emit("logOut");
        });
    },
  },
  created: async function () {
    this.getorders();
  },
};
</script>
<style scoped>
.body {
    justify-content: center;
  align-items: center;
  background: var(--gray);
}
.containergrande{
    background: var(--gray);
}
.containerOrders {
  display: grid;
  justify-content: center;
  align-items: center;
  background: var(--gray);
  margin-block-start: 5%;
  margin-block-end: 30%;
  flex-direction: row;
}
.lg-title{
    font-family: "Roboto", sans-serif;
    padding: 0.6rem 0;
    text-transform: capitalize;
    text-align: center;
    
}
.card-header{
    text-align: center;
}
.card-footer{
    text-align: center;
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

</style>
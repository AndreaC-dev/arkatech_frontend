<template>
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
                              <div><a href="#" v-on:click="loadOrder(order.user.id,order.numero)" class="btn btn-outline-primary ms-3 me-2 icon">ver</a>
                              <button  type="button" class="btn btn-outline-success ms-3 me-2 icon" v-on:click="loadUpdateOrder(order.user.id,order.numero)" 
                              title="Edit Order">Editar<em class="bi bi-pencil-square"></em></button>
                              <button  type="button" class="btn btn-outline-danger ms-3 me-2 icon" v-on:click="loadDelete(order.user.id,order.numero)"
                              title="Eliminar">Eliminar<em class="bi bi-trash-fill"></em></button>
                              </div>

                            </div>             
                            <div class="card-footer">
                              <small class="text-muted">{{order.fecha}}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-center">
                    <button id="return" class="btn btn-danger return" v-on:click="loadCatalogo">Regresar</button>
                </div>
            </div> 
       </div>    
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
    loadDelete: async function (id_u,id_o) {
      if(confirm(`Esta seguro de eliminar la orden número ${id_o}?`)){
        if (localStorage.getItem("token_refresh") === null || localStorage.getItem("token_access") === null) {
            this.$emit("logOut");
            return;
          }
          await this.verifyToken();
          let token = localStorage.getItem("token_access");
          let userId = jwt_decode(token).user_id.toString();
          axios
          .delete(`https://arckatech-be.herokuapp.com/order/remove/${userId}/${id_o}/`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((result) => {
            alert(`Orden ${id_o} eliminada`);
          })
          .catch((error) => {
            this.$emit("logOut");
          });
    }else{
            this.$router.push({ name: "allorders" });
    }
     window.location.reload();
    },
    
    getorders: async function () {
      if (
        localStorage.getItem("token_refresh") === null ||
        localStorage.getItem("token_access") === null
      ) {
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`https://arckatech-be.herokuapp.com/orders/${userId}/`, {
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
          "https://arckatech-be.herokuapp.com/refresh/",
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
  display:table;
  justify-content: center;
  align-items: center;
  background: var(--gray);
  margin-block-start: 1%;
  margin-block-end: 10%;
  flex-direction: row;
  border-radius: 10px;
}
.lg-title{
    font-family: "Roboto", sans-serif;
    text-transform: capitalize;
    text-align: center;
    
}
.card-header{
    text-align: center;
}
.card-footer{
    text-align: center;
}

.btn{
  min-width: 80px;
    float:center;
}
.return {
  background-color: #92484B;
}

@media only screen and (max-width: 400px) {
  .containerOrders {
  margin-block-end: 30%;
    
  }
}

</style>
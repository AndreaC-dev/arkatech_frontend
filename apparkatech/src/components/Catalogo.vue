  <template>
  <div class="container-fluid">
        <h2 class="Subtitulo">Catálogo</h2>
        <div class="row p-2">
        <div class="card" v-for="product in products" :key="product.id" style="width: 18rem;">
        <h5 class="card-title text-center">{{product.nombre}}</h5>
        <img class="card-img-top" v-bind:src="product.imagen" v-bind:alt="product.nombre"/>
        <div class="card-body">
        <button class="Botones"  v-on:click="loadProductDetail(product.id)" >Ver Producto</button>
        <button class="Botones">Comprar </button>
        </div>
        </div>
        </div>
        </div>
  </template>
<script>
import axios from 'axios';

export default{
    name: "Catalogo",

    data: function(){
        return{
          products:[],
          product:0
        }
    },
    methods:{
      loadProductDetail: function(id){
      console.log(id)
      this.$router.push({name: "productDetail", params: { id: id }})
    },
    },
    created(){
      axios.get("http://127.0.0.1:8000/viewproduct/")
        .then((result) => {
        this.products = result.data
        console.log(result)
        })
        .catch((error)=>{
            console.log(error);
            if (error.response.status = "404")
            alert("Error 404: No hay productos");})
    },
}
</script>
<style scoped>
 .img-fluid {
    width: 250px;
    height: 200px;
    background-color:white;
    justify-content: center;
  }
  .products{
    text-align: center;
  }
</style>
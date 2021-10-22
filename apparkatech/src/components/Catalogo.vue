  <template>
  <body>

    <h2 class="Subtitulo">Catalogo</h2>
    <div v-for="product in products" :key="product.id">
    <div class="mitad">
      <div class="mitad1">
        <div class="productos">
                <h4>{{product.nombre}}</h4>          
                <img v-bind:src="product.imagen" v-bind:alt="product.nombre"/>
                <button class="Botones"  v-on:click="loadProductDetail">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
        </div>
        </div>
    </div>  
  </body>
  </template>
<script>
import axios from 'axios';

export default{
    name: "Catalogo",

    data: function(){
        return{
          products:[]
        }
    },
    methods:{
      loadProductDetail: function(){
      this.$router.push({name: "productDetail"})
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
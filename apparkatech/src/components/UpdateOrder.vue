  <template>
  <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <body>
   <form>
      <div class="card header">    
          <h1>Actualizar orden de Compra</h1>
      <div class="card "><img class="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKT-Logo-Design-Graphics-3386288-1.jpg" > 
      </div>        
      </div>   
      <div class="card-body">
            <h4 class="card-title h5 h4-sm">Orden de Compra: {{this.order.numero}}</h4>
            <p class="card-text">fecha: {{this.order.fecha}}</p>
            Nombre:     {{this.order.user.nombre}} {{this.order.user.apellido}}<br>
            Despacho:   Tienda<br>
            Ciudad:     Bogotá D.C<br>
            Correo: {{this.order.user.email}}<br>
        </div>  
        </form>
                <form v-on:submit.prevent="UpdateOrder">
        <div class="form-group">
        <div class="card">
            <label> Seleccionar Producto </label>
            <select v-model="order1.productoId" name="precio">
                <option disable selected>Seleccione un producto</option>
                <option v-for="producto in productos" :key="producto.id" :value="producto.id">{{producto.nombre}}  - Precio Unitario {{producto.precioUnitario}}</option></select>            
            <label> Seleccionar Cantidad </label>

        </div>

            <input type="number" placeholder="Cantidad a comprar" v-model="order1.cantidad">
        </div>
        <div class=" last">
            <button type="submit" class="btn btn-info">Actualizar</button>
            <button type="button" class="btn btn-info" v-on:click="loadOrders">Regresar</button>
        </div>
</form>
</body>
</div>
</template>
<script>
import axios from "axios";
import jwt_decode from 'jwt-decode';
export default {
  name: "Order",
  data: function () {
    return {
        
        id_u: this.$route.params.id_u,
        id_o: this.$route.params.id_o,
        products: [],
        product: 0,
        order1: {           
            productoId : 0,
            precioTotal:0,
            cantidad: 0,
            usuarioId:0,
        },
        order: {
            numero: 0,
            fecha: 0,
            cantidad: 0,
            precioTotal: 0,
            descuento: 0,
            user: {
                id: 0,
                email: "",
                nombre: "",
                apellido: ""
            },
            product: {
                id: 0,
                nombre: "",
                marca: "",
                precioUnitario: 0,
                iva: 0,
            },
        },
    };
  },
   mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/dbed6b6114.js', 'crossorigin', 'anonymous')
      document.head.appendChild(recaptchaScript)
    },
  methods: {
          loadOrders: function () {
              this.$router.push({ name: "allorders" });
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
             UpdateOrder: async function(submitEvent){
                 this.order1.precioTotal=0;
                    axios
                        .get(`http://127.0.0.1:8000/product/${this.order1.productoId}/`)
                        .then((result) => {
                            this.order1.precioTotal=result.data.precioUnitario*(this.order.cantidad);
                            this.sendOrder()
                            })
                        .catch((error) => {
                            console.log(error);
                            if ((error.response.status = "404"))
                            alert("Error 404: No hay productos");
                        });       
                    

        },
        sendOrder: async function(){
                    if(localStorage.getItem("token_refresh") === null || localStorage.getItem("token_access") === null) {
                        this.$emit("logOut");
                        this.$router.push({ name: "home"});
                        return;
                    }
                    
                    await this.verifyToken();
                    let token  = localStorage.getItem("token_access");
                    this.order1.usuarioId=jwt_decode(token).user_id;
                    let userId = jwt_decode(token).user_id.toString();
                    console.log("esta es la odern completa",this.order1);
                    axios.put(
                        `http://localhost:8000/order/update/${userId}/${this.order.numero}/`,
                        this.order1,
                        {headers: {'Authorization': `Bearer ${token}`}}
                    )
                    .then((result) => {
                        this.$emit("completedOrder");
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
        getOrder: async function(){
             if(localStorage.getItem("token_refresh") === null || localStorage.getItem("token_access") === null) {
                    this.$emit("logOut");
                    return;
                }

                await this.verifyToken();
                let token  = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.get(
                    `http://localhost:8000/order/${userId}/${this.id_o}/`,
                    {headers: {'Authorization': `Bearer ${token}`}}
                )
                .then((result) => {
                    console.log(result.data)
                    this.order = result.data;
                })
                .catch((error) => {
                    if(error.response.status == "401") {
                        alert("Usted no está autorizado para realizar esta operación.");
                    }
                    else if(error.response.status == "404"){
                        alert("Error 404: No existe esta orden");
                    }
                })
            },
        },

     created: async function(){
        this.getOrder()
        axios
        .get("http://127.0.0.1:8000/viewproduct/")
          .then((result) => {
            this.products = result.data;
            console.log(this.products);
          })
          .catch((error) => {
            console.log(error);
            if ((error.response.status = "404"))
              alert("Error 404: No hay productos");
        });
        },
};
</script>
<style >
.tabla{
    font-size: 10px;
    text-align: center;
}
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  left: calc(50% - 50px);
}
.header {
    text-align: center;
    background-color: #1bba93;
    border-color:gray;
}
.header h1{

    font-size: 30px;
    text-align: center;
    color: white;
    padding: 20px 0;
    font-weight: bold;

}
    .last{
        margin-bottom: 170px;
    }

.important{

    background-color: #9D4E89;
}
	.btn-info{
            background-color: #1bba93;
              float:right;

    }
	        .tab {
            display: inline-block;
            margin-left: 40px;
        }
        	        .tab1 {
            display: inline-block;
            margin-left: 15px;
        }
                	        .tab2 {
            display: inline-block;
            margin-left: 10px;
        }

</style>
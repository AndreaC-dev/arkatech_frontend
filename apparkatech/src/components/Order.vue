  <template>
  <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <body>
      <div class="card header">
    
          <h1>Orden de Compra</h1>
      
      <div class="card "><img class="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKT-Logo-Design-Graphics-3386288-1.jpg" >
            <div class="card-body">
            <h4 class="card-title h5 h4-sm">Orden de Compra: {{this.order.numero}}</h4>
            <p class="card-text">fecha: {{this.order.fecha}}</p>
        </div>
    </div>
    </div>
      <div class="card">
        <div class="card-columns d-flex justify-content-center">
            <div class="card me-6">
            <div class="card-block">
                <div class="card-body">
                    Nombre:     {{this.order.user.nombre}} {{this.order.user.apellido}}<br>
                    Despacho:   Tienda<br>
                    Ciudad:     Bogotá D.C<br>
                </div>
            </div>
            </div>
            <div class="card me-6">
            <div class="card-block">
                <div class="card-body">
                    Correo: {{this.order.user.email}}<br>
                    Vendedor: Web
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="card">
            <div class="card">
                <table class="table tabla">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">REF.</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">V.Initario</th>
                    <th scope="col">IVA</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{{this.order.product.id}}</td>
                    <td>{{this.order.cantidad}}</td>
                    <td>{{this.order.product.nombre}}</td>
                    <td>{{this.order.product.precioUnitario}}</td>
                    <td>{{this.order.product.iva}}</td>
                    <td>{{this.order.precioTotal}}</td>
                    </tr>
                </tbody>
                </table>
            </div>      
        </div>    

      <div class="card">

            <div class="card">
            <div class="card-block">
                <div class="card-body">
                    Subtotal<span class="tab"></span><span class="tab1"></span>{{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.order.product.precioUnitario*(this.order.cantidad))}}<br>
                    Descuento<span class="tab"></span>{{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.order.descuento)}}<br>
                    IVA<span class="tab"></span><span class="tab"></span><span class="tab2"></span>{{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 0}).format((this.order.product.precioUnitario*(this.order.cantidad))*((this.order.product.iva)/100))}}<br>
                    Total<span class="tab"></span><span class="tab"></span>{{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 0}).format((this.order.product.precioUnitario*(this.order.cantidad))*(1+(this.order.product.iva)/100))}}<br>                     
                </div>
            </div>
        </div>
                </div>
<div class=" last">
    <button type="button" class="btn btn-info" v-on:click="loadOrders">Regresar</button>
    </div>
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
                        'https://arckatech-be.herokuapp.com/refresh/',
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
        getOrder: async function(){
             if(localStorage.getItem("token_refresh") === null || localStorage.getItem("token_access") === null) {
                    this.$emit("logOut");
                    return;
                }

                await this.verifyToken();
                let token  = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.get(
                    `https://arckatech-be.herokuapp.com/order/${userId}/${this.id_o}/`,
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
        this.getOrder()}, 
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
    background-color: #977FB3;
        margin-top: 2%;
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
            background-color: #92484B;
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
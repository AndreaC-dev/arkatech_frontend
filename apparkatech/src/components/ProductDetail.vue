<template>
  <div id="productDetail">
<div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
  <div class="jumbotron">
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img class="card-img-top" v-bind:src="producto.imagen" v-bind:alt="producto.nombre"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{producto.nombre}}</h5>
        <div class="col">
      <dl>
        <dt class="bold">Description</dt>
        <dd id="description">{{producto.descripcion}}</dd>
      </dl><br>
      <dl>
        <dt>Valor</dt>
        <dd id="valor">{{producto.precioUnitario}}</dd>
      </dl><br>
      <dl>
        <dt class="bold">Iva</dt>
        <dd id="description">{{producto.iva}}</dd>
      </dl><hr>
    </div>
      </div>
    </div>
        </div>
  </div>
        </div>
                </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProductDetail",
    data(){

        return {
              id:this.$route.params.id,
              producto:{}
            }
        },
      created(){
        axios.get(`http://127.0.0.1:8000/product/${this.id}/`)
          .then((response)=>{
            this.producto = response.data
              })
                      .catch((error)=>{
            console.log(error);
            if (error.response.status = "404")
            alert("Error 404: No hay productos");})
      },
      }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_nombre h2 {
    float: left;
    margin-left: 1%;
    }
.Product {
margin: 0;
padding: 0%;
height: 100%;
width: 100%;
display: flex;
flex-direction:row;
/*background-color: aqua;*/
        
}

.container_imagen {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    margin-left: 1%;
    margin-top: 1%;

}
.container_imagen img{
    width: 90%;
    height: 10%px;
    display: block;
    }
.container_titulo{
    float: left;
}

.container_text {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    margin-right: 1%;
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 1%;

}
.container_text h3{
    text-align: center;
}
.container_button {
  display: flex;
  align-items: center;
  justify-content: center;        
}
.container_button button{
    text-align:center;
    margin-left :5px;
    margin-right :5px;
    background-color: #283747; 
    color:white;
    height: 30px;
    border-radius: 10%;
    width: 90px;
    float: right;    
    }
.container_button button:hover{
    color: #E5E7E9;
    background:slateblue;
    border: 1px solid #283747;
    }
</style>
<template>
<div class="container_nombre">
    <h2>{{nombre}}</h2>
</div>
  <div class="ProductDetail">
      <div class="container_imagen">
          <img src="">
      </div>
      <div class="container_text">
          <div class="container_titulo">
              <h3>Detalles</h3>
              </div>
          <h4>Descripcion: <span>{{descripcion}}</span></h4>
          <h4>Valor: <span>{{valor}}</span> COP.</h4>
          <h4>Iva: <span>{{iva}}</span> COP.</h4>
          <h4>Total: <span>{{imagen}}</span> COP.</h4>
          <div class="container_button">
              <button id="comprar">Comprar</button>
          </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "ProductDetail",

    data (){
        return {
                nombre:"",
                imagen:"",
                valor:"",
                descripcion:"",
                iva:""
            }
        },

    mounted(){
        let vue= this;
        console.log("ingresando a la funcion");
        axios.get('http://127.0.0.1:8000/product/1/')
        .then(function(response) {
            vue.nombre = response.data.nombre;
            vue.imagen = response.data.imagen;
            vue.valor = response.data.precioUnitario;
            vue.descripcion = response.data.descripcion;
            vue.iva = response.data.iva;
            console.log(vue);
            })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_nombre h2 {
    float: left;
    margin-left: 1%;
    }
.ProductDetail {
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
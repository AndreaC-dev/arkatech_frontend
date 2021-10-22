<template>
  <div id="app" class="app">
  <div class="header">
      <h1 class="justify-content">Arkatech</h1>
  <nav>
    <form class="form-inline justify-content">
  <button class="left">Inicio</button>
  <button class="left">Categorías</button>
  <button class="left">Quienes somos</button>
      <input class="form-control mr-sm-2" type="search" placeholder="Qué estás buscando" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <button id="login">Ingresar</button>
  <button id="signup">Registrarse</button>
  </form>
  </nav>
  </div>
  </div>
  <body>

    <h2 class="Subtitulo">Catalogo</h2>
    <div class="mitad">
      <div class="mitad1">
        <div class="productos">
                <h4>Producto 1</h4>
                <img class ="imagen" src="https://www.crucial.mx/content/dam/crucial/dram-products/ballistix-max-udimm/images/product/crucial-ballistix-max-and-rgb-offset-stacked-front-flat-image.psd.transform/small-png/img.png" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
        </div>
            <div class="productos">
                <h4>Producto 2</h4>
                <img class ="imagen" src="https://www.informaticapalafrugell.com/image/cache/data/TF4D416G3600HC18JDC01_1-500x400.jpg" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
            </div>
                 <div class="productos">
                   <h4>Producto 3</h4>
                <img class ="imagen" src="https://http2.mlstatic.com/D_NQ_NP_857500-MCO44367548563_122020-O.jpg" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
               </div>
              
        </div>
       <div class="mitad2">
        
             <div class="productos">
                <h4>Producto 4</h4>
                <img class ="imagen" src="https://exitocol.vtexassets.com/arquivos/ids/8850441/memoria-ram-gamer-8gb-hyperx-fury-black-ddr4-3600-dimm-pc.jpg?v=637611825387470000" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
               </div>
            <div class="productos">
                <h4>Producto 5</h4>
                <img class ="imagen" src="https://www.profesionalreview.com/wp-content/uploads/2017/11/Disipador-para-memorias-Jonsbo-NC-1-2.jpg" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div></div>
                 <div class="productos">
                   <h4>Producto 6</h4>
                <img class ="imagen" src="https://recursos.mps.com.co/images/Productos/AX4U320016G16A-ST41.jpg" >
                <div>
                <button class="Botones">Ver Producto</button>
               <button class="Botones">Comprar </button>
               </div>
               </div>
        </div>
     

    </div>  

  
   
  </body>
  <footer class="footer"> Copyright @2021 Arkatech. Todos los derechos reservados
 <br>
  Desarrollado por: Andrea Cardenas, Alejandro Carmona, David Nuñez, Diego Sánchez, José Rondón, Willinton Ascancio
  </footer>
</template>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #1e917afd;
  color: white;
  text-align: center;
  font-family: sans-serif;
}

.header{
  margin:0;
  padding:10;
  width:100%;
  background-color:#1e917afd;
  height: 10vh;
  min-height: 100px;
  text-align: center;
  font-family: sans-serif;
  color: white;

}
.header h1{
    width: 30%;
    text-align: center;
}


input{
height: 30px;
width: 200px;
margin-left :10px;

}
.left {
text-align:left;
margin-left :5px;
margin-right :5px;
background-color: #69737E; 
color:white;
height: 30px;
border-radius: 10%;
width: 150px;}


#signup,#login {
text-align:right;
margin-left :5px;
margin-right :5px;
background-color: #283747; 
color:white;
height: 30px;
border-radius: 10%;
width: 150px;}

.header h1{
text-align:left;}

body{
  background: #EBE0E4;
}

.justify-content{
  color: black;
}


.mitad{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:column;
        justify-content: center;
        text-align: center;
        
}

.mitad1{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:row;
        justify-content: center;
        text-align: center;

        
}



.mitad2{
  height: 690px;
  width: 100%px;
  background: rgb(196, 173, 173);
  padding: 10px 10px 0 10px;
  border-radius: 10px;
   display: flex;
        flex-direction:row;
        justify-content: center;
        text-align: center;
        
}

.productos{
  font-family: sans-serif;
  height: 310px;
  width: 530px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  margin-top:10px;
  margin-bottom: 20px;
  margin-right: 50px;
  display: flex;
        flex-direction:column ;
  text-align: center;
  border: 2px solid black
}



.imagen{
  height: 55%;
  width: 55%;
  margin: top 10px;
  margin-bottom:15px;
  margin-left: 20%;
  margin-right: 20%;
  
}

.Botones{
background-color: rgba(31, 187, 140, 0.932);
border-radius: 10px;
}
  
.Botones button{
  background-color: red;
  border-radius: 50px;
  margin-top: 50%;
}  



</style>
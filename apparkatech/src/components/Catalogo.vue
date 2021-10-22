  <template>
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
  </template>
<script>
import axios from 'axios';

export default{
    name: "Catalogo",

    data: function(){
        return{

        }
    }
}
</script>
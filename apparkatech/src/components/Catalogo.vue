  <template>
  <body>
    <div class="products">
      <div class="products-container">
        <h1 class="lg-title">Catálogo</h1>
        <div class="product-items">
          <!-- single product -->
          <div v-for="product in products" :key="product.id" class="product">
            <div class="product-content">
              <div class="product-img">
                <img v-bind:src="product.imagen" v-bind:alt="product.nombre" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-view" v-on:click="loadProductDetail">
                  View Product
                  <span><i class="fas fa-plus"></i></span>
                </button>
                <button type="button" class="btn-buy">
                  buy now
                  <span><i class="fas fa-shopping-cart"></i></span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <a href="#" class="product-name">{{ product.nombre }}</a>
              <p class="product-price">${{ product.precioUnitario }}</p>
              <!-- <p class="product-price">$ 133.00</p> -->
            </div>
            <!-- Producto contine descuento 
            <div class="off-info">
              <h2 class="sm-title">25% off</h2>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!--<h2 class="Subtitulo">Catalogo</h2>
    <div v-for="product in products" :key="product.id">
      <div class="mitad">
        <div class="mitad1">
          <div class="productos">
            <h4>{{ product.nombre }}</h4>
            <img v-bind:src="product.imagen" v-bind:alt="product.nombre" />
            <button class="Botones" v-on:click="loadProductDetail">
              Ver Producto
            </button>
            <button class="Botones">Comprar</button>
          </div>
        </div>
      </div>
    </div>-->
  </body>
</template>
<script>
import axios from "axios";

export default {
  name: "Catalogo",
  data: function () {
    return {
      products: [],
    };
  },
   mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/dbed6b6114.js', 'crossorigin', 'anonymous')
      document.head.appendChild(recaptchaScript)
    },
  methods: {
    loadProductDetail: function () {
      this.$router.push({ name: "productDetail" });
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/viewproduct/")
      .then((result) => {
        this.products = result.data;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        if ((error.response.status = "404"))
          alert("Error 404: No hay productos");
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Quicksand", sans-serif;
}

/* Utility stylings */
img {
  width: 100%;
  display: block;
}
.products-container {
  width: 88vw;
  margin: 0 auto;
  margin-bottom: 50px;
}
.lg-title,
.md-title,
.sm-title {
  font-family: "Roboto", sans-serif;
  padding: 0.6rem 0;
  text-transform: capitalize;
}
.lg-title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  padding: 1.3rem 0;
  opacity: 0.9;
}
.md-title {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
.sm-title {
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;
}

/* product section */
.products {
  background: var(--alice-blue);
  padding: 3.2rem 0;
}

.product {
  margin: 2rem;
  position: relative;
}
.product-content {
  background: var(--gray);
  padding: 3rem 0.5rem 2rem 0.5rem;
  cursor: pointer;
}
.product-img {
  background: var(--white-light);
  box-shadow: 0 0 20px 10px var(--white-light);
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  transition: background 0.5s ease;
}
.product-btns {
  display: flex;
  justify-content: center;
  margin-top: 1.4rem;
  opacity: 0;
  transition: opacity 0.6s ease;
  font-size: 0.8rem;
}
.btn-view,
.btn-buy {
  background: transparent;
  border: 1px solid black;
  padding: 0.8rem 0;
  width: 125px;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.6s ease;
}
.btn-view {
  background: black;
  color: white;
}
.btn-view:hover {
  background: var(--carribean-green);
}
.btn-buy {
  background: white;
}
.btn-buy:hover {
  background: var(--carribean-green);
  color: #fff;
}
.product-info {
  background: white;
  padding: 2rem;
}
.product-name {
  color: black;
  display: block;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
.product-price {
  padding-top: 0.6rem;
  padding-right: 0.6rem;
  display: inline-block;
}
/*.product-price:first-of-type {
  text-decoration: line-through;
  color: var(--carribean-green);
}*/
.product-img img {
  transition: transform 0.6s ease;
}
.product:hover .product-img img {
  transform: scale(1.5);
}
/*.product:hover .product-img {
  background: var(--carribean-green);
}*/
.product:hover .product-btns {
  opacity: 1;
}
.off-info .sm-title {
  background: var(--carribean-green);
  color: white;
  display: inline-block;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  z-index: 1;
  letter-spacing: 3px;
  cursor: pointer;
}

/* Media Queries */
@media screen and (min-width: 992px) {
  .product-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-col-r-bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .product-items {
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .products .text-light {
    width: 50%;
  }
}

@media screen and (min-width: 1336px) {
  .product-items {
    grid-template-columns: repeat(4, 1fr);
  }
  .product-collection-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .flex {
    height: 60vh;
  }
  .product-col-left {
    height: 121.5vh;
  }
}
</style>
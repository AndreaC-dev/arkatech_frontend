  <template>
  <body>
    <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-md-1 float-md-center">
    <div class="products">
      <div class="products-container">
        <h1 class="lg-title">Catálogo</h1>
        <div class="product-items">
          <div v-for="product in products" :key="product.id" class="product">
            <div class="product-content">
              <div class="product-img">
                <img v-bind:src="product.imagen" v-bind:alt="product.nombre" v-on:click="loadProductDetail(product.id)"/>
              </div>
              <div class="product-btns">
                <button
                  type="button"
                  class="btn-view"
                  v-on:click="loadProductDetail(product.id)"
                >
                  Ver Producto
                  <span><i class="fas fa-plus"></i></span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <a href="#" class="product-name">{{ product.nombre }}</a>
              <p class="product-price"> {{new Intl.NumberFormat("es-CO",{style: "currency", currency: "COP", minimumFractionDigits: 2}).format(product.precioUnitario+product.iva )}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
import axios from "axios";
export default {
  name: "Catalogo",
  data: function () {
    return {
      products: [],
      product: 0,
    };
  },
  methods: {
    loadProductDetail: function (id) {
      this.$router.push({ name: "productDetail", params: { id: id } });
    },
  },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/dbed6b6114.js', 'crossorigin', 'anonymous')
      document.head.appendChild(recaptchaScript)
    },
  created() {
    axios
      .get("https://arckatech-be.herokuapp.com/viewproduct/")
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
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

/* Utility stylings */
img {
  width: 100%;
  display: block;
}
.products-container {
  
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  
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
  align-items: center;
  justify-content: center;
}

.product {
  margin: 2rem;
  position: relative;
}
.product-content {
  background: var(--gray);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
}
.product-items{
  align-items: center;
  justify-content: center;
  

}

.product-img {
  background: var(--white-light);
  box-shadow: 0 0 20px 10px var(--white-light);
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  transition: background 0.3s ease;
  align-items: center;
  justify-content: center;
}
.product-img img {
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  transition: transform 0.6s ease;
}
.product-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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
  background: white;
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
    align-items: center;
    justify-content: center;
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
@media only screen and (max-width: 400px) {
 
.products{
  margin-bottom: 170px;
}
}
</style>
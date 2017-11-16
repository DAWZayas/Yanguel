<template>
    <el-card class = "marginTop" :body-style="{ padding: '0px' }">
        <img :src="product.src" class="image">
      <div class = "padding">
        <div class = "text title">{{product.name}}</div>
        <div class="bottom clearfix">
          <p class="text transparent"> {{product.stock > 0 ? "En stock: " + product.stock + " unidades." : "Producto Agotado."}}</p>
          <div class="time">
            <div class="prices">
              <p v-if="product.offer" class="text offer"><span class = "title"> Oferta: </span>{{product.offer}}€</p>
              <p class="text" :class="{offer: !product.offer , price: product.offer}">Precio: {{product.price}}€</p>
            </div>
          </div>
          <div class ="bottom clearfix">
            <el-button type="primary"
                class="button"
                @click="onAdd"
                :class="{disabled: product.inCart}"
                :disabled="product.inCart"
            >
            <span class = "buttonText"> {{this.buttonText}} </span> <i v-if="!product.inCart" class="material-icons">add_shopping_cart</i>
            </el-button>
          </div>
        </div>
      </div>
    </el-card>

</template>

<script>

let BUTTON_TEXT = {
  inCart: 'Producto en el carrito',
  notInCart: 'Añadir producto'
}

export default {
  data () {
    return {
      idKey: this.product.key,
      targetKey: '#' + this.product.key,
      shoppingCartProduct: this.product
    }
  },
  name: 'product',
  components: {
  },
  props: ['product'],
  computed: {
    buttonText () {
      return this.product.inCart ? BUTTON_TEXT.inCart : BUTTON_TEXT.notInCart
    }
  },
  methods: {
    onAdd (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.$emit('addToCart', this.shoppingCartProduct)
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";


.text {
    color: black;
    font-weight: bold;
    cursor: default;
}

.buttonText{
  font-weight: bold;
  font-size: 1em;
  margin-right: 0.3em;
}

.marginBot{
  margin-bottom: 1em;
}
.padding{
  padding: 0.9em;
}
.transparent {
  opacity: 0.3;
}

.title {
    color: rgba(73, 71, 71, 0.81);
    text-align: center;
}

.prices {
    margin-left: 5em;
    text-align: center;
    font-size: 0.8em;
    width: calc(20% + 5rem);
    display: inline-block;
}

.price {
    color: #4B4B4B;
    margin-left: 2em;
    font-size: 0.8em;
    float: right;
    text-decoration: line-through;
}

.offer {
    margin-left: -1em;
    float: left;
    font-size: 1.3em;
}


.down{
  top: 10em;
}

.marginTop{
  margin-top: 0.5em;
}

.time {
  font-size: 0.8em;
  color: #999;
}

.bottom {
  margin-top: 0.8em;
  line-height: 0.7em;
}
.button{
  padding: 0.4em;
}

.image {
  margin-top: 0.3em;
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}
@media (min-width: 500px) {
  .prices {
      margin-left: 3em;
  }

  .productes:hover {
      transform: scale(1.02);
  }
}

</style>

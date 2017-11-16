<template>
    <el-card :body-style="{ padding: '0px' }">
      <a data-toggle="modal" :data-target = "targetKey" >
        <img :src="product.src" class="image">
      </a>
      <div style="padding: 14px;">
        <span>{{product.name}}</span>
        <div class="bottom clearfix">
          <p class="text transparent"> {{product.stock > 0 ? "En stock: " + product.stock + " unidades." : "Producto Agotado."}}</p>
          <div class="prices row">
              <p v-if="product.offer" class="text offer">{{product.offer}}€</p>
              <p class="text" :class="{offer: !product.offer , price: product.offer}">{{product.price}}€</p>
          </div>
          <div class="time">{{ currentDate }}</div>
          <el-button type="primary" class="button" @click="onAdd" :class="{disabled: product.stock <= 0}" :disabled="product.stock <= 0"> Añadir al carrito <i class="material-icons">add_shopping_cart</i></el-button>
        </div>
      </div>
    </el-card>

</template>

<script>

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

.marginBot{
  margin-bottom: 1em;
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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
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

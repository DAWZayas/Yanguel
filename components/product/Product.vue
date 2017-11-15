<template>
    <div class = "products col-xs-12 col-md-2">
      <a data-toggle="modal" :data-target = "targetKey" ><img :src="product.src"> </a>
        <p class="text title"> {{product.name}}</p>
        <p class="text transparent"> {{product.stock > 0 ? "En stock: " + product.stock + " unidades." : "Producto Agotado."}}</p>
        <div class="prices row">
            <p v-if="product.offer" class="text offer">{{product.offer}}€</p>
            <p class="text" :class="{offer: !product.offer , price: product.offer}">{{product.price}}€</p>
        </div>
        <div class = "button-div input-group marginBot">
          <input type="number" class="form-control col-xs-2" v-model ="cuantity" :disabled="product.stock <= 0" min = '0' :max = "product.stock" placeholder="cantidad" aria-describedby="basic-addon1">
          <button class = "btn btn-primary" @click="onAdd" :class="{disabled: product.stock <= 0}" :disabled="product.stock <= 0"> <i class="material-icons">add_shopping_cart</i></button>
        </div>

      <div class="modal fade down" :id="idKey" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productModal">{{product.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Descripción: {{product.description}} <br>
              Precio: {{product.offer ? product.offer : product.price}}€<br>
              {{product.stock > 0 ? "En stock: " + product.stock + " unidades." : "Producto Agotado."}}
            </div>
            <div class="modal-footer">
              <div class = "button-div input-group marginBot">
                <input type="number" class="form-control col-xs-2" v-model ="cuantity" :disabled="product.stock <= 0" min = '0' :max = "product.stock" placeholder="cantidad" aria-describedby="basic-addon1">
                <button class = "btn btn-primary" @click="onAdd" :class="{disabled: product.stock <= 0}" :disabled="product.stock <= 0"> <i class="material-icons">add_shopping_cart</i></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        cuantity: 0,
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
        this.shoppingCartProduct.cuantity = this.cuantity === '' ? 0 : parseInt(this.cuantity)
        console.log(this.shoppingCartProduct.cuantity)
        this.shoppingCartProduct.cuantity !== 0 ? this.$emit('addToCart', this.shoppingCartProduct) : this.$emit('removeFromCart', this.shoppingCartProduct)
        this.cuantity = 0
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

.products {
    margin-top: 4em;
    margin-bottom: 2em;
    margin-left: 3em;
    margin-right: 0.5em;
    border-radius: 0.5em;
    background-color: rgba(207, 203, 203, 0.62);
    overflow: hidden;
}


.products img {
    border-radius: 0.5em;
    width: 100%;
    margin-top: 0.2em;
}

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
.button-div {
  text-align: center;
  clear: both;
}

.down{
  top: 10em;
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

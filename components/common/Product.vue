<template>
    <div class = "products col-xs-12 col-md-2">
    <nuxt-link  to="/product/:id">
    <img :src="product.src">
      <p class="text title"> {{product.name}}</p>
      <div class="prices">
          <p class="text offer">{{product.offer}}</p>
          <p class="text price">{{product.price}}</p>
      </div>
    </nuxt-link>
      <div class = "button-div btn-group">
      <button class = "btn btn-default" @click="onAdd"> <i class="material-icons">add_shopping_cart</i></button>
      <button class = "btn btn-default" :class="{disabled: !product.inCart}" @click = "onRemove" > <i class="material-icons">delete</i></button>
      </div>
    </div>
</template>

<script>
  let BUTTON_TEXT = {
    ADD: 'Add to cart',
    REMOVE: 'Remove from cart'
  }

  export default {
    data () {
      return {
      }
    },
    name: 'product',
    components: {
    },
    props: ['product'],
    computed: {
      buttonText () {
        return this.inCart ? BUTTON_TEXT.ADD : BUTTON_TEXT.REMOVE
      },
      switchButtonText () {
        return this.inCart ? BUTTON_TEXT.REMOVE : BUTTON_TEXT.ADD
      }
    },
    methods: {
      onSwitch () {

      },
      onAdd (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('addToCart', this.product)
      },
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('removeFromCart', this.product)
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

    margin-top: 2em;
    margin-bottom: 2em;
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

.title {
    color: rgba(73, 71, 71, 0.81);
    text-align: center;
}

.prices {
    text-align: center;
    font-size: 0.8em;
    width: calc(20% + 5rem);
}

.price {
    color: #4B4B4B;
    font-size: 0.8em;
    float: right;
    text-decoration: line-through;
}
.button-div {
  text-align: center;
  clear: both;
}
.offer {
    margin-left: -1em;
    float: left;
    font-size: 1.3em;
}
@media (min-width: 500px) {

  .prices {
      margin-left: 3em;
  }

  .products:hover {
      transform: scale(1.02);
  }
}

</style>

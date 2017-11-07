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
      <div class = "button-div">
      <button class = "btn btn-default" @click="onAction"> {{this.switchButtonText}}</button>
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
        isInChart: false
      }
    },
    name: 'product',
    components: {
    },
    props: ['product'],
    computed: {
      buttonText () {
        return this.isInChart ? BUTTON_TEXT.ADD : BUTTON_TEXT.REMOVE
      },
      switchButtonText () {
        return this.isInChart ? BUTTON_TEXT.REMOVE : BUTTON_TEXT.ADD
      }
    },
    methods: {
      onSwitch () {

      },
      onAction (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        if (this.isInChart) {
          this.$emit('removeFromCart', this.product)
        } else {
          this.$emit('addToCart', this.product)
        }
        this.isInChart = !this.isInChart
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
    margin-left: 0.5em;
    text-align: center;
    font-size: 0.8em;
    width: calc(20% + 5rem);
}

.price {
    color: #4B4B4B;
    float: right;
    text-decoration: line-through;
}
.button-div {
  clear: both;
  text-align: center;
  margin-bottom: 0.5em;
}
.offer {
    float: left;
    font-size: 1.4em;
}
@media (min-width: 500px) {

  .prices {
      margin-left: 5em;
  }

  .products:hover {
      transform: scale(1.02);
  }
}

</style>

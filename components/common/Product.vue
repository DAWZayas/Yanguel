<template>
    <div class="productos col-xs-12 col-md-4">
       <img :src="product.src">
      <p class="text title"> {{product.name}}</p>
      <div class="prices">
          <p class="text offer">{{product.offer}}</p>
          <p class="text price">{{product.price}}</p>
      </div>
      <div>
      <button class = "btn btn-default" @click="onSwitch"> {{this.switchButtonText}}</button>
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
        this.isInChart = !this.isInChart
      },
      onAction (ev) {
        ev.preventDefault()
        ev.stopPropagation()
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

.productos {
    margin-top: 2em;
    margin-bottom: 2em;
    margin-right: 0.5em;
    border-radius: 0.5em;
    background-color: rgba(207, 203, 203, 0.62);
    overflow: hidden;
}


.productos img {
    border-radius: 0.5em;
    width: 100%;
}

.text {
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
    width: calc(20% + 4em);
}

.price {
    color: #4B4B4B;
    float: right;
    text-decoration: line-through;
}

.offer {
    float: left;
    font-size: 1.2em;
}
@media (min-width: 500px) {

  .prices {
      margin-left: 15em;
  }
  .productos img {
      width: 60%;
  }
  .productos:hover {
      transform: scale(1.02);
  }
}

</style>

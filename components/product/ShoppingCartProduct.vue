<template>
    <div class = "products col-xs-12">
      <div class = "col-xs-4"><img :src="product.src"></div>
      <div class = "col-xs-8">
        <p class="text title"> {{product.name}}</p>
        <div class="prices">
            <p class="text offer">{{product.offer}}</p>
            <p class="text price">{{product.price}}</p>
        </div>
        <div class = "button-div btn-group">
          <button class = "btn btn-default" @click="onRemove"> Eliminar</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    name: 'shoppingCartProduct',
    components: {
    },
    props: ['product'],
    methods: {
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

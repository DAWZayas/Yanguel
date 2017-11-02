<template>
    <div class="productos col-xs-12 col-md-4">
       <img :src="product.src">
      <p class="text title"> {{product.name}}</p>
      <div class="prices">
          <p class="text offer">{{product.offer}}</p>
          <p class="text price">{{product.price}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'product',
    components: {
    },
    props: ['product']
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
    margin-bottom: 2em;
    border-radius: 0.5em;
    background-color: rgba(207, 203, 203, 0.62);
    overflow: hidden;
}
.productos img {
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
    margin-left: 8em;
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

</style>

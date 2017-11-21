<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row>
      <el-col :xs="8" :md="4">
        <img :src="product.src" class="img">
      </el-col>
      <el-col :xs="16" :md="20">
        <el-row>
          <p class="text title">{{product.name}}</p>
        </el-row>
        <el-row v-if="product.cuantity">
           <el-col :xs="10">
            <p class="text">Precio total:</p>
          </el-col>
          <el-col :xs="14">
            <p v-if="product.offer" class="text">{{product.offer * product.cuantity}} €</p>
            <p v-if="!product.offer" class="text">{{product.price * product.cuantity}} €</p>
          </el-col>
        </el-row>
        <el-row>
            <el-input-number type="number" v-model ="cuantity" :disabled="product.stock <= 0" :min = '0' :max = "product.stock" placeholder="cantidad" aria-describedby="basic-addon1"></el-input-number>
            <el-button type = "primary" icon = "el-icon-sold-out" @click="onValueChange" :class="{disabled: product.stock <= 0}" :disabled="product.stock <= 0"></el-button>
        </el-row>
        <el-row>
          <el-button type="text" @click="onRemove">Eliminar</el-button>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        cuantity: 0,
        shoppingCartProduct: this.product
      }
    },
    name: 'shoppingCartProduct',
    components: {
    },
    props: ['product'],
    methods: {
      onValueChange (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.shoppingCartProduct.cuantity = parseInt(this.cuantity)
        this.shoppingCartProduct.cuantity !== 0 ? this.$emit('onValueChange', this.shoppingCartProduct) : this.$emit('removeFromCart', this.shoppingCartProduct)
        this.cuantity = 0
      },
      onRemove (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.$emit('removeFromCart', this.shoppingCartProduct)
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

.img{
  width: 100%;
}

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

.clear{
  clear: both;
  margin-right: 2em;
  margin-left: -2em;
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

<template>
    <el-row>
      <el-row>
        <p class="text title">{{product.name}}</p>
      </el-row>
      <el-col :xs="24" :md="4">
        <img :src="product.src" class="img">
      </el-col>
      <el-col :xs="24" :md="20">
        <el-row>
           <el-col :xs="14">
            <p class="text">Precio unitario:</p>
          </el-col>
          <el-col :xs="10">
            <p v-if="product.offer" class="text">{{product.offer}} €</p>
            <p v-if="!product.offer" class="text">{{product.price}} €</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="10"><p class = "text">Descripción:</p></el-col>
          <el-col :xs="14"><p> {{product.description}} </p></el-col>
        </el-row>
        <el-row>
          <el-button type="text" @click="onRemove">Eliminar</el-button>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    data () {
      return {
        cuantity: 0,
        shoppingCartProduct: this.product
      }
    },
    name: 'productDetails',
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
.marginRight{
  margin-right: 2em;
}
</style>

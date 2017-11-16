<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
      <el-row>
        <el-col class = "marginTop">
          <shoppingCartProduct v-for="product in shoppingCart" :product="product" :key="product.key" @onValueChange="onValueChange" @removeFromCart = "removeFromCart"></shoppingCartProduct>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
    <footer-component></footer-component>
    </el-footer>
  </el-container>
</template>
<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import { ShoppingCartProduct } from '~/components/product'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    })
  },
  methods: {
    ...mapActions(['onValueChange', 'removeFromCart'])
  }
}
</script>
<style lang="scss">
  .marginTop{
    top: 0.5em;
  }
</style>

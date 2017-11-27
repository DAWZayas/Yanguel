<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
      <el-row>
        <el-button class = "marginTop" v-if="shoppingCart" @click='buyShoppingCart'> Comprar carrito</el-button>
        <el-button class = "marginTop" v-if="shoppingCart" @click='removeShoppingCart'> Vaciar carrito</el-button>
      </el-row>
      <el-row :gutter="20">
        <el-col class = "marginTop" :xs="24" :md="12" :lg ="8" v-for="product in shoppingCart" :key="product.key">
          <shoppingCartProduct  :product="product" @onValueChange="onValueChange" @removeFromCart = "removeFromCart"></shoppingCartProduct>
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
    ...mapActions(['onValueChange', 'removeFromCart', 'removeShoppingCart', 'buyShoppingCart'])
  }
}
</script>
<style lang="scss">
  .marginTop{
    top: 0.5em;
  }
</style>

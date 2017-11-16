<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <product v-for="product in products" :product="product" :key="product.key" @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
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
import { Product } from '~/components/product'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    Product
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    })
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart'])
  }
}
</script>
<style lang="scss">
  .marginTop{
    top: 0.5em;
  }
</style>

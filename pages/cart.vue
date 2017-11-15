<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12">
      <div class = "col-md-12 row">
        <shopping-cart-product v-for="product in shoppingCart" :product="product" :key="product.key" @addToCart="addToCart" @removeFromCart = "removeFromCart"></shopping-cart-product>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
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
    ...mapActions(['addToCart', 'removeFromCart'])
  }
}
</script>
<style lang="scss">
</style>

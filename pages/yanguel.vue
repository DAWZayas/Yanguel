<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12">
      <div class = "col-md-12 row marginTop">
        <product v-for="product in products" :product="product" :key="product.key" @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
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

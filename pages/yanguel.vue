<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12">
      <div class = "col-md-12 row">
          <product v-for="product in products" :product="product" :key="product.key" @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import { Product } from '~/components/product'
import { mapGetters } from 'vuex'

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
    addToCart (product) {
      if (this.shoppingCart.find(p => product.key === p.key)) {
        this.shoppingCart[this.shoppingCart.findIndex(p => product.key === p.key)].cuantity++
      } else {
        product.cuantity = 1
        this.shoppingCart.push(product)
        this.products.find(p => product.key === p.key).inCart = true
      }
      console.log(this.shoppingCart[this.shoppingCart.findIndex(p => product.key === p.key)].cuantity)
    },
    removeFromCart (product) {
      const index = this.shoppingCart.findIndex(p => product.key === p.key)
      this.shoppingCart.splice(index, 1)
      this.products.find(p => product.key === p.key).inCart = false
    }
  }
}
</script>
<style lang="scss">
</style>

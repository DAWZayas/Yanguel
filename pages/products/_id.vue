<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
      <productDetails :product="this.product"></productDetails>
    </el-main>
    <el-footer>
      <footer-component></footer-component>
    </el-footer>
  </el-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { HeaderComponent, FooterComponent } from '~/components/common'
import { ProductDetails } from '~/components/product'

export default {
  data () {
    return {
      product: null
    }
  },
  components: {
    ProductDetails,
    FooterComponent,
    HeaderComponent
  },
  methods: {
    ...mapActions(['bindProducts', 'bindProduct', 'unbindProductReference']),
    getProduct () {
      this.products.forEach(p => {
        if (p['.key'] === this.$route.params.id) {
          this.product = p
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  created () {
    this.bindProducts()
    this.getProduct()
    this.bindProduct(this.product)
  },
  destroy () {
    this.unbindProductReference()
  }

}
</script>
<style lang="scss">
</style>

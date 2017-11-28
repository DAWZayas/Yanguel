<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
       <product-details :product = "this.product"></product-details>
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
          console.log(this.product)
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

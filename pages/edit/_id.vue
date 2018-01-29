<template>
  <el-container>
    <header-component></header-component>
    <el-main>
      <product-editing :product = "getProduct()"></product-editing>
    </el-main>
    <el-footer>
      <footer-component></footer-component>
    </el-footer>
  </el-container>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { ProductEditing } from '~/components/product'

  export default {
    data () {
      return {
      }
    },
    components: {
      ProductEditing,
      FooterComponent,
      HeaderComponent
    },
    methods: {
      ...mapActions(['bindProducts', 'bindProduct', 'unbindProductReference']),
      getProduct () {
        const product = this.products.filter(p => p['.key'] === this.$route.params.id)[0]
        return product
      }
    },
    computed: {
      ...mapGetters({
        products: 'getProducts'
      })
    },
    created () {
      this.bindProducts().then(() => this.bindProduct(this.getProduct()))
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

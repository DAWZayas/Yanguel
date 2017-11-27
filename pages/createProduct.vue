<template>
  <el-container>
    <el-header>
      <header-component></header-component>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col class = "marginTop" :xs="24">
          <createProduct  @addProduct="addProduct"></createProduct>
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
import { CreateProduct } from '~/components/product'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    CreateProduct
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    })
  },
  methods: {
    ...mapActions(['addProduct'])
  }
}
</script>
<style lang="scss">
  .marginTop{
    top: 0.5em;
  }
</style>

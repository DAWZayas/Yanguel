<template>
  <el-container>
    <header-component></header-component>
    <el-main>
      <el-row :gutter="20">
        <el-col class = "marginTop" :xs="24">
          <clip-loader v-show="loading.creatingProduct"></clip-loader>
          <createProduct  v-show = "!loading.creatingProduct" @addProduct="addProduct"></createProduct>
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
import { mapGetters, mapActions, mapState } from 'vuex'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    CreateProduct,
    ClipLoader
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    }),
    ...mapState(['loading'])
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

<template>
  <el-container >
    <header-component></header-component>
    <clip-loader v-show="loading.loadingProducts"></clip-loader>
    <el-main v-show="!loading.loadingProducts">
      <el-input size="small" v-show="showSearchBar" v-model="searchTerm" suffix-icon="el-icon-search" type="search" placeholder="Search for products"></el-input>
      <el-row :gutter="20">
        <el-col :xs="24" :md="12" :lg ="8" v-for="product in productsToDisplay" :key="product['.key']" class = "marginTop">
          <product :product="product"  @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
        </el-col>
        <button-add-component v-if="admin"></button-add-component>
      </el-row>
    </el-main>
    <el-footer>
      <footer-component></footer-component>
    </el-footer>
  </el-container>
</template>
<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import { Product, buttonAddComponent } from '~/components/product'
import { mapGetters, mapActions, mapState } from 'vuex'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  data () {
    return {
      admin: true,
      searchTerm: '',
      displayProducts: []
    }
  },
  components: {
    ClipLoader,
    FooterComponent,
    HeaderComponent,
    Product,
    buttonAddComponent
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    }),
    ...mapState(['loading', 'showSearchBar']),
    productsToDisplay () {
      this.displayProducts = this.products.filter(product => {
        let name = product.name.toLowerCase()
        let description = product.description.toLowerCase()
        let term = this.searchTerm.toLowerCase()
        let tags = product.tags.filter(t => t.toLowerCase().indexOf(term) >= 0)
        return name.indexOf(term) >= 0 || description.indexOf(term) >= 0 || tags.length > 0
      }).reverse()
      return this.displayProducts
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart', 'setLoading'])
  }
}
</script>
<style lang="scss">
.el-header, .el-footer {
    background-color: #B3C0D1;
  }


.el-main {
  background-color: #E9EEF3;
}

</style>

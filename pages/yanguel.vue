<template>
  <el-container >
    <header-component></header-component>
    <clip-loader v-show="loading.loadingProducts"></clip-loader>
    <el-main v-show="!loading.loadingProducts">
      <el-input size="small" v-show="showSearchBar" v-model="searchTerm" suffix-icon="el-icon-search" type="search" placeholder="Search for products"></el-input>
      <el-row :gutter="20">
        <el-col :xs="24" :md="12" :lg ="8" v-for="product in productsToDisplayPaginated" :key="product['.key']" class = "marginTop">
          <product :product="product"  @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
        </el-col>
        <button-add-component v-if="user && user.admin"></button-add-component>
      </el-row>
    <products-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></products-pagination-component>
    </el-main>
    <el-footer>
      <footer-component></footer-component>
    </el-footer>
  </el-container>
</template>
<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import { Product, buttonAddComponent, ProductsPaginationComponent } from '~/components/product'
import { mapGetters, mapActions, mapState } from 'vuex'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  data () {
    return {
      admin: true,
      searchTerm: '',
      displayProducts: [],
      pageSize: 1,
      actualProductsSize: 1
    }
  },
  components: {
    ProductsPaginationComponent,
    ClipLoader,
    FooterComponent,
    HeaderComponent,
    Product,
    buttonAddComponent
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart',
      user: 'getUser'
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
    },
    productsToDisplayPaginated () {
      return this.productsToDisplay.slice(0, this.actualProductsSize)
    },
    hasMore () {
      return this.productsToDisplay.length > this.actualProductsSize
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart', 'setLoading']),
    onLoadMore () {
      this.actualProductsSize = this.actualProductsSize + this.pageSize
    }
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

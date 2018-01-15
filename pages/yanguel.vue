<template>
  <el-container >
    <header-component></header-component>
    <el-main>
      <div class="form-group">
 +      <input v-model="searchTerm" class="input" type="search" placeholder="Search for products">
 +    </div>
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
      searchTerm: ''
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
    ...mapState(['loading']),
    productsToDisplay () {
      this.setLoading({loadingProducts: true})
      const products = this.products.filter(product => {
        let name = product.name.toLowerCase()
        let description = product.description.toLowerCase()
        let term = this.searchTerm.toLowerCase()
        let tags = product.tags.filter(t => t.toLowerCase().indexOf(term) >= 0)
        console.log(tags)
        return name.indexOf(term) >= 0 || description.indexOf(term) >= 0 || tags.length > 0
      }).reverse()
      this.setLoading({loadingProducts: false})
      return products
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

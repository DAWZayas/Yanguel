<template>
  <el-container>
    <header-component></header-component>
    <el-main>
      <el-row :gutter="20">
        <el-col :xs="24" :md="12" :lg ="8" v-for="product in products" :key="product.key" class = "marginTop">
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
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      admin: true
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    Product,
    buttonAddComponent
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
.el-header, .el-footer {
    background-color: #B3C0D1;
  }


.el-main {
  background-color: #E9EEF3;
}

</style>

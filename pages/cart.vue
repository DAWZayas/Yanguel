<template>
  <el-container>
    <header-component></header-component>
    <el-main>
      <el-row>
        <el-button class = "marginTop" v-if="shoppingCart" @click='onBuy'> Comprar carrito</el-button>
        <el-button class = "marginTop" v-if="shoppingCart" @click='onRemoveShoppingCart'> Vaciar carrito</el-button>
      </el-row>
      <el-row :gutter="20">
        <el-col class = "marginTop" :xs="24" :md="12" :lg ="8" v-for="product in shoppingCart" :key="product.key">
          <shoppingCartProduct  :product="product" @onValueChange="onValueChange" @removeFromCart = "removeFromCart"></shoppingCartProduct>
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
import { ShoppingCartProduct } from '~/components/product'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      money: 10000,
      total: 0
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      shoppingCart: 'getShoppingCart'
    }),
    totalCost () {
      if (this.shoppingCart.length !== 0) {
        this.total = this.shoppingCart.reduce((carry, val) => {
          console.log(val)
          return carry + (val.cuantity * val.price)
        }, 0)
      }
      console.log(this.total)
    }
  },
  methods: {
    ...mapActions(['onValueChange', 'removeFromCart', 'removeShoppingCart', 'buyShoppingCart']),
    onRemoveShoppingCart (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.removeShoppingCart()
      this.onSuccessRemove()
      this.$router.push('/')
    },
    onBuy (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      if (this.total > this.money) {
        this.onError('You don\'t have enough money to buy this')
        return
      }
      console.log(this.total)
    },
    onSuccessRemove () {
      this.$notify.success({
        title: 'Yay!',
        message: 'You removed your shopping cart successfuly',
        position: 'bottom-right'
      })
    },
    onError (err) {
      this.$notify.error({
        title: 'Something went wrong',
        message: err,
        position: 'bottom-right'
      })
    }
  }
}
</script>
<style lang="scss">
  .marginTop{
    top: 0.5em;
  }
</style>

<template>
  <div>
    <product :product="this.product"></product>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { Product } from '~/components/product'
export default {
  data () {
    return {
      product: null
    }
  },
  components: {
    Product
  },
  methods: {
    ...mapActions(['bindProducts']),
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
  }
}
</script>
<style lang="scss">
</style>

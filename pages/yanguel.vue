<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12 row">
        <product v-for="product in products" :product="product" :key="product.key" @addToCart="addToCart"></product>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import { HeaderComponent, FooterComponent, Product } from '~/components/common'

export default {
  data () {
    return {
      products: [
        { name: 'Coche deportivo',
          price: '27€',
          offer: '10€',
          src: 'https://avatars3.githubusercontent.com/u/17402800?s=88&v=4',
          key: 1
        },
        { name: 'iPhone',
          price: 'Carísimo',
          offer: 'Caro',
          src: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
          key: 2
        },
        { name: 'Café del Starbucks',
          price: 'Pulmones',
          offer: 'Riñón',
          src: 'https://globalassets.starbucks.com/assets/1b68ff25144844af8cee77c0de7f2c63.jpg',
          key: 3
        }
      ],
      shopping_cart: [

      ]
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    Product
  },
  methods: {
    addToCart (product) {
      this.shopping_cart.push(product)
      console.log(this.shopping_cart[this.shopping_cart.length - 1].name)
    },
    removeFromCart (product) {
      this.shopping_cart.pull(product)
      console.log(this.shopping_cart)
    }
  }
}
</script>
<style lang="scss">
</style>

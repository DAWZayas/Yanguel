<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12">
      <div class = "col-md-12 row">
          <product v-for="product in products" :product="product" :key="product.key" @addToCart="addToCart" @removeFromCart = "removeFromCart"></product>
      </div>
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
        { name: 'Consola',
          price: 'Mucho más',
          offer: 'Mucho',
          inCart: false,
          src: 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$TwoColumn_Image$',
          key: 1
        },
        { name: 'iPhone',
          price: 'Carísimo',
          offer: 'Caro',
          inCart: false,
          src: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
          key: 2
        },
        { name: 'Café del Starbucks',
          price: 'Pulmones',
          offer: 'Riñón',
          inCart: false,
          src: 'https://globalassets.starbucks.com/assets/1b68ff25144844af8cee77c0de7f2c63.jpg',
          key: 3
        }
      ],
      shoppingCart: [

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
      if (this.shoppingCart.find(p => product.key === p.key)) {
        this.shoppingCart[this.shoppingCart.findIndex(p => product.key === p.key)].cuantity++
      } else {
        product.cuantity = 1
        this.shoppingCart.push(product)
        this.products.find(p => product.key === p.key).inCart = true
      }
      console.log(this.shoppingCart[this.shoppingCart.findIndex(p => product.key === p.key)].cuantity)
    },
    removeFromCart (product) {
      const index = this.shoppingCart.findIndex(p => product.key === p.key)
      this.shoppingCart.splice(index, 1)
      this.products.find(p => product.key === p.key).inCart = false
    }
  }
}
</script>
<style lang="scss">
</style>

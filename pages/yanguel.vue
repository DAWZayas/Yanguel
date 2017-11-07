<template>
  <div>
    <header-component></header-component>
    <div class = "jumbotron col-xs-12 row">
        <product v-for="product in products" :product="product" :key="product.key"></product>
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
        { name: 'Producto 2',
          price: 'Precio 2',
          offer: 'Oferta 2',
          src: '',
          key: 2
        },
        { name: 'Producto 3',
          price: 'Precio 3',
          offer: 'Oferta 3',
          src: '',
          key: 3
        }
      ]
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    Product
  }
}
</script>
<style lang="scss">
</style>

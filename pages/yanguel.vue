<template>
  <div>
    <header-component></header-component>
    <nuxt-link to="product">Product </nuxt-link>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'

  export default {
    data () {
      return {}
    },
    components: {
      FooterComponent,
      HeaderComponent
    }
  }
</script>
<style lang="scss">
</style>

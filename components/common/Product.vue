<template>
  <div class = "jumbotron">
    <div class="container">
       <img src="coche.jpg">
      <p class="text title">Nombre de producto</p>
      <div class="prices">
          <p class="text offer">Oferta</p>
          <p class="text price">Precio</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product',
    components: {
    },
    props: [],
  }
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";


</style>

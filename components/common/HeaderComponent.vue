<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff">
    <el-menu-item index="1"><nuxt-link class="nav-link" to="/"><i class="material-icons">home</i></nuxt-link></el-menu-item>
    <el-menu-item index="2"><nuxt-link class="nav-link" to="/cart"><i class="material-icons">shopping_cart</i></nuxt-link></el-menu-item>
    <el-menu-item index="3"><nuxt-link class="nav-link" to="/login"><i class="material-icons">account_box</i></nuxt-link></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    name: 'header-component',
    components: {
    },
    methods: {
      onStartPage () {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";

  .menu{
    width: 100%;
  }
</style>

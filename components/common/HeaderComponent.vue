<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><nuxt-link class="nav-link" to="/">Home</nuxt-link></el-menu-item>
    <el-menu-item index="2"><nuxt-link class="nav-link" to="cart">SC</nuxt-link></el-menu-item>
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

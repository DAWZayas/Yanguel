<template>
  <el-menu
    class="el-menu-demo menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff">
    <el-menu-item index="1"><nuxt-link to="/"><i class="material-icons">home</i></nuxt-link></el-menu-item>
    <el-menu-item index="2"><nuxt-link to="/cart"><i class="material-icons">shopping_cart</i></nuxt-link></el-menu-item>
    <el-menu-item index="3"><nuxt-link to="/login"><i class="material-icons">account_box</i></nuxt-link></el-menu-item>
    <el-menu-item index="4"><nuxt-link to=""><i class="material-icons" @click="showSearchBar">search</i></nuxt-link></el-menu-item>
  </el-menu>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    name: 'header-component',
    components: {
    },
    methods: {
      ...mapActions(['showSearchBar']),
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

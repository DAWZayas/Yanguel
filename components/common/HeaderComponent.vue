<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title"> <i class="material-icons">menu</i></template>
      <el-menu-item index="1-1"><nuxt-link to="/"><i class="material-icons">home</i>Home</nuxt-link></el-menu-item>
      <el-menu-item index="1-2"><nuxt-link to="/cart"><i class="material-icons">shopping_cart</i>Shopping Cart</nuxt-link></el-menu-item>
      <el-menu-item index="1-3"><nuxt-link to="/login"><i class="material-icons">account_box</i>Profile</nuxt-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><i class="material-icons" @click="showSearchBar">search</i></el-menu-item>
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
      ...mapActions(['showSearchBar'])
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
    background-color: #545c64;
    text-color: #fff;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

</style>

<template>
    <el-dropdown class="menu" size="default" trigger="click" placement="top-start" show-timeout="300" hide-timeout="200">
        <span class="el-dropdown-link">
          <i class="material-icons">menu</i>
        </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><nuxt-link to="/"><i class="material-icons">home</i></nuxt-link></el-dropdown-item>
        <el-dropdown-item><nuxt-link to="/cart"><i class="material-icons">shopping_cart</i></nuxt-link></el-dropdown-item>
        <el-dropdown-item><nuxt-link to="/login"><i class="material-icons">account_box</i></nuxt-link></el-dropdown-item>
        <el-dropdown-item><i class="material-icons" @click="showSearchBar">search</i></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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

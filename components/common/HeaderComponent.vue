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
      <el-menu-item index="1-2" v-if="shoppingCart && shoppingCart.length > 0" ><nuxt-link to="/cart"><i class="material-icons">shopping_cart</i>Shopping Cart</nuxt-link></el-menu-item>
      <el-menu-item index="1-3" v-if="user && !user.name"><nuxt-link to="/login"><i class="material-icons">account_box</i>Login/Register</nuxt-link></el-menu-item>
      <el-menu-item index="1-3" v-if="user && user.name" @click="onLogout"><nuxt-link to="/"><i class="material-icons">account_box</i>Logout</nuxt-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><i class="material-icons" @click="showSearchBar">search</i></el-menu-item>
    <el-submenu index="3">
      <template slot="title">Filter Tags</template>
      <el-menu-item index="3-1">Otros</el-menu-item>
      <el-menu-item index="3-2">Informática</el-menu-item>
      <el-menu-item index="3-3">Electrónica</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    name: 'header-component',
    components: {
    },
    methods: {
      ...mapActions(['showSearchBar', 'unbindUserReference']),
      onLogout (ev) {
        this.unbindUserReference()
        this.onSuccessLogout()
        console.log(this.user)
      },
      onSuccessLogout () {
        this.$notify.success({
          title: 'Bye!',
          message: 'Successfuly logged out, we hope to see you soon!.',
          position: 'bottom'
        })
      }
    },
    computed: {
      ...mapGetters({
        shoppingCart: 'getShoppingCart',
        user: 'getUser'
      })
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

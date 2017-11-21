<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><nuxt-link class="nav-link" to="/"> Home</nuxt-link></el-menu-item>
    <el-menu-item v-if="user" index="2"> Profile</nuxt-link></el-menu-item>
    <el-menu-item v-else index="2"> <nuxt-link class="nav-link" to="login"> LogIn</nuxt-link> </el-menu-item>
    <el-menu-item index="3"><nuxt-link class="nav-link" to="cart">  Show cart<i class="el-icon-goods"></i></nuxt-link></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        user: 'Pepe'
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

  .header {
    display: block;
    padding: 1em 0.5em;
    width: 100%;
    color: #fff;
    background-color: $color-lp-primary;
    position:fixed;
    color: $color-primary;
    z-index: 9999;

    @include media-breakpoint-down(md) {
      height: auto;
      min-height: $header-md-height;
      background-color: $color-lp-primary;
    }
    .nuxt-link-active {
      font-weight: bold;
    }
    .nav-link {
      color: $color-primary;
      cursor: pointer;

      @include media-breakpoint-down(md) {
        padding-right: 0;
        padding-left: 0;
      }
      &:hover,
      &:active,
      &:focus {
        color: $color-primary;
      }
      &.disabled {
        cursor: default;
        color: $nav-link-disabled-color;
      }
    }
    .buttons-holder {
      margin-left: 60px;

      @include media-breakpoint-down(md) {
        margin-left: 0;
      }
    }
  }
</style>

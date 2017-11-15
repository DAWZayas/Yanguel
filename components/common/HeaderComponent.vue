<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light row">
        <div class="navbar-brand">
          <logo></logo>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarHeader">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/"><i class="material-icons">home</i> Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="profile"><i class="material-icons">perm_identity</i> Profile</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="login"> <i class="material-icons">account_circle</i> LogIn</nuxt-link>
            </li>
             <li class="nav-item">
              <nuxt-link class="nav-link" to="cart"> <i class="material-icons">shopping_cart</i> Show Cart</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
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
    width: 100vw;
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
    .container {
      height: 100%;
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

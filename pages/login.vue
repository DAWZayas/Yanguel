<template>
  <div>
    <header-component></header-component>
    <el-row>
      <el-col :xs="24" :md="15" class="fill">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="padding-top: 8em;">
          <el-menu-item index="1">Login</el-menu-item>
          <el-menu-item index="2">Register</el-menu-item>
        </el-menu>
        <div v-if="login">
          <login-component></login-component>
        </div>
        <div v-else>
          <register-component></register-component>
        </div>
      </el-col>
    </el-row>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '~/components/common'
import { loginComponent, registerComponent } from '~/components/login'

export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      login: true
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      if (parseInt(key) === 1) {
        this.login = true
      } else {
        this.login = false
      }
    }
  },

  components: {
    FooterComponent,
    HeaderComponent,
    loginComponent,
    registerComponent
  }
}
</script>

<style lang="scss">
@import "../assets/styles/base/colors";
@import "../assets/styles/base/variables";
@import "../assets/styles/vendors/flex";
@import "../assets/styles/vendors/bootstrap/functions";
@import "../assets/styles/vendors/bootstrap/variables";
@import "../assets/styles/vendors/bootstrap/mixins";

  .form{
    background-color: $color-lp-bg;
  }

  .fill{
    padding-left: 0
  }

  @media (min-width: 580px) {
    .fill{
      padding-left: 25vh
    }
  }

  @media (min-width: 1000px) {
    .fill{
      padding-left: 50vh
    }
  }

</style>

<template>
  <div>
    <header-component></header-component>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="padding-top: 8em">
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '~/components/common'

export default {
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },

  components: {
    FooterComponent,
    HeaderComponent
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

</style>

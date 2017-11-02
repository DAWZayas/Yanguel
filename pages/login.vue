<template>
  <div>
    <header-component></header-component>
    <div class = "container">
      <form class = "col-xs-4 form">
        <div class = "form-group row">
          <label for="formUser" class="col-sm-2 col-form-label">User</label>
          <div class= "col-xs-8">
            <input type="text" class="form-control" id="formUser" placeholder="User">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-xs-8">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '~/components/common'

export default {
  data () {
    return {}
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

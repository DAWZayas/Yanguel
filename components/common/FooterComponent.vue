<template>
  <div class="footer">
    <div class="footerContainer">
      <span class="copyright">&copy; 2017 Yanguel</span>
      <span class="fact">A new web to buy online.</span>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/mixins/breakpoints";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/utils/module";
  .footer {
    padding: 0 0.6em;

    .footerContainer {
      @extend .center-content;
      @include justify-content(space-between);
      font-weight: lighter;
      color: $color-grey2;

      @include media-breakpoint-down(sm) {
        @include align-items(flex-start);
        @include flex-direction(column);
      }
    }
    .copyright,
    .author {
      width: 150px;
      margin-right:0.7em;
    }
    .copyright,
    .fact,
    .author {
      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
        width: auto;
      }
    }
  }
</style>

<template>
  <div class="footer">
    <div class="container">
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
    border-top: 0.3em dotted $color-primary;
    min-height: $footer-height;
    padding: 0.9em 0.6em;

    .container {
      @extend .center-content;
      @include justify-content(space-between);
      height: 100%;
      min-height: 1.9em;
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

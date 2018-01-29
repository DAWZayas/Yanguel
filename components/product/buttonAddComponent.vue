<template>
  <nuxt-link to="/createProduct">
    <el-button size="mini"class="mdc-fab material-icons app-fab--absolute" aria-label="Favorite" round>
      <span class="mdc-fab__icon">
        shop
      </span>
    </el-button>
  </nuxt-link>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.app-fab--absolute {
  position: fixed;
  bottom: 0.5rem;
  right: 0.1rem;
  background-color: #EDF2FC;
}
@media(min-width: 1024px) {
   .app-fab--absolute {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>

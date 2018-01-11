<template>
  <div>
    <yanguel v-show="!loadingProducts"> </yanguel>
  </div>
</template>
<script>
  import yanguel from '~/pages/yanguel'
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {yanguel},
    methods: {
      ...mapActions(['bindProducts'])
    },
    computed: {
      ...mapState(['loading'])
    },
    created () {
      this.bindProducts()
    }
  }
</script>

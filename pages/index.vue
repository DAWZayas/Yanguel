<template>
  <div>
    <yanguel> </yanguel>
  </div>
</template>
<script>
  import yanguel from '~/pages/yanguel'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {yanguel},
    methods: {
      ...mapActions(['bindProducts'])
    },
    created () {
      this.bindProducts()
    }
  }
</script>

<template>
  <div>
    <yanguel> </yanguel>
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
    components: {
      yanguel
    },
    methods: {
      ...mapActions(['bindProducts', 'setLoading'])
    },
    computed: {
      ...mapState(['loading'])
    },
    created () {
      this.setLoading({loadingProducts: true})
      this.bindProducts().then(() => this.setLoading({loadingProducts: false}))
    }
  }
</script>

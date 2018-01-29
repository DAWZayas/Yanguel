<template>
  <el-row class="button">
    <el-col>
      <el-button @click="onLoadMore" v-show="hasMore" round>Load more</el-button>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: ['hasMore'],
    methods: {
      onLoadMore () {
        this.$emit('loadMore')
      }
    }
  }
</script>
<style>
  .button {
    margin-top: 2em;
  }
</style>

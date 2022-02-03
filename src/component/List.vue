<template>
  <ul>
    <li v-for="(book, index) of list" :key="index">{{ book.Title }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
};
</script>

<style>
</style>
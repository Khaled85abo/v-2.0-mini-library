<template>
  <ul>
    <li v-for="book of list" :key="book.Id">{{ book.Title }}</li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style>
</style>
<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/book">Book</router-link>
      </div>
      <div class="list-container">
        <svg
          @click="$store.commit('toggleShowList')"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"
          />
        </svg>

        <List v-if="$store.state.showList" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import List from "./component/List";
export default {
  components: { List },
  data() {
    return {
      books: null,
    };
  },
  computed: {
    showList() {
      return this.$store.state.showList;
    },
  },
  mounted() {
    this.$store.dispatch("fetchBooks");
    // fetch("/books.json")
    //   .then((res) => res.json())
    //   .then((data) => (this.books = data));
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#nav {
  display: flex;
  justify-content: space-around;
}
</style>

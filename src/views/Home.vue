<template>
  <div id="home">
    <h3>List of books</h3>
    <div class="books-container">
      <article v-for="book in books" :key="book.id" @click="bookView(book.Id)">
        <div>
          <p>
            {{ book.Title }}
          </p>
          <p>{{ book.Author }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ['books'],
  mounted() {
    console.log(this.books);
  },
  methods: {
    bookView(id) {
      console.log(id);
      this.$router.push({ path: `/book/${id}` });

      //  this.$router.push({name:'Book', params: id})
    },
  },
};
</script>

<style scoped>
article {
  display: flex;
  align-items: flex-end;
  text-align: left;
  border: 2px solid black;
  list-style: none;
  height: 300px;
  width: 200px;
  background: peachpuff;
  margin: 1rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

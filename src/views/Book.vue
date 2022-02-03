<template>
  <div id="book" v-if="book">
    <div class="back-btn" @click="$router.go(-1)">
      <div class="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path
            d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
          />
        </svg>
      </div>
    </div>
    <div class="book-info">
      <div class="book-cover">
        <div class="book-cover-div">
          <div class="verticlal-line"></div>
          <div class="title-author">
            <p>{{ book.Title }}</p>
            <p>{{ book.Author }}</p>
          </div>
        </div>
      </div>
      <div class="book-details">
        <h3>{{ book.Title }}</h3>
        <h5>{{ book.Author }}</h5>
        <p>{{ book.Plot }}</p>
        <div class="info-details">
          <div>
            <div>
              <span>Audience: </span>
              <span>{{ book.Audience }}</span>
            </div>
            <div>
              <span>Pages: </span>
              <span>{{ book.Pages }}</span>
            </div>
          </div>
          <div>
            <div>
              <span>First published: </span>
              <span>{{ book.Year }}</span>
            </div>
            <div>
              <span>Publisher: </span>
              <span>{{ book.Publisher }}</span>
            </div>
          </div>
        </div>
        <button @click="$store.dispatch('addToList', book)">
          Oh, I want to read it!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$store.state.books.find(
        (book) => book.Id === Number(this.$route.params.id)
      );
    },
  },
};
</script>

<style scoped lang='scss'>
#book {
  background: #1B1B1B;
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #CCCCCC;
  .svg {
    height: 30px;
    width: 30px;
    background: gray;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .book-info {
    display: flex;
    height: 350px;
    .book-cover {
      padding: 1rem;

      width: 450px;
      display: flex;
      justify-content: center;

      .book-cover-div {
        position: relative;
        background: #75AF8D;
        height: 300px;
        width: 200px;
        display: flex;
        align-items: flex-end;
        .verticlal-line {
          height: 100%;
          width: 2px;
          background: rgba(0, 0, 0, 0.4);
          position: absolute;
          left: 1rem;
        }
        .title-author {
          color: black;
          margin-left: 2rem;
          margin-bottom: 1rem;
          p:last-of-type {
            font-size: 0.6rem;
          }
        }
      }
    }
    .book-details {
      padding: 1rem;
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info-details {
        background: #262626;
        display: flex;
        justify-content: space-between;
      }
      button {
        background: #BEBEBE;
      }
    }
  }
}
</style>

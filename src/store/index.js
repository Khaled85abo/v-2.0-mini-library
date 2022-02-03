import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [{ Title: "test title" }],
    showList: true,
    books: []
  },
  actions: {
    fetchBooks(context) {
      fetch("/books.json")
        .then((res) => res.json())
        .then((data) => context.commit("setBooks", data));
    },
    addToList(context, payload) {
      context.commit("addToList", payload);
    }
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    addToList(store, book) {
      const existingbook = store.list.find((bo) => bo.Title === book.Title);
      if (!existingbook) store.list.push(book);
      console.log(store.list);

      store.showList = true;
      setTimeout(() => {
        store.showList = false;
      }, 1500);
    },
    toggleShowList(store) {
      store.showList = !store.showList;
    }
  },
  getters: {}
});

export default store;

<template>
  <div class="page">
    <div v-if="isLoading" class="page__loading-area">loading...</div>
    <div v-else class="page__content">
      <Article class="page__item" :source="article" />
      <Comments
        class="page__item"
        :source="comments"
        :isAuthorised="isAuthorised"
        @comment-created="createComment"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Article from "../components/ArticleComponent";
import Comments from "../components/Comments/Comments";
export default {
  components: {
    Article,
    Comments
  },
  computed: {
    ...mapState({
      // dubious name here, huh?
      article: state => state.article.article,
      comments: state => state.article.comments
    }),
    ...mapGetters({
      isAuthorised: "auth/isAuthorised"
    })
  },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    async fetchArticle() {
      await this.$store.dispatch("article/fetch");
    },
    ...mapActions({
      createComment: "article/createComment"
    })
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.fetchArticle();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
@import "../styles";
</style>

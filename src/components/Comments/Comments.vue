<template>
  <div class="comments">
    <!-- Title -->
    <div class="comments__title comments-title">Comments</div>

    <div class="comments__content">
      <!-- Comments -->
      <div v-if="isEmpty" class="comments__empty-area">
        We dont found any of comment 😟
        <p>
          {{ isAuthorised ? "Be the first 😉" : "SignIn to comment out" }}
        </p>
      </div>
      <div
        v-else
        class="comment-wrapper"
        v-for="(c, index) in source"
        :key="'comment-' + index"
      >
        <CommentComponent :source="c" />
      </div>
      <!-- Add comment area -->
      <CommentCreateComponent
        class="comments__comment-create-container"
        v-show="isAuthorised"
        @comment-created="commentCreated"
      />
    </div>
  </div>
</template>

<script>
import CommentComponent from "./CommentComponent";
import CommentCreateComponent from "./CommentCreateComponent";

export default {
  props: ["source", "isAuthorised"],
  computed: {
    isEmpty() {
      return this.source?.lenght > 0 ?? true;
    }
  },
  components: {
    CommentComponent,
    CommentCreateComponent
  },
  methods: {
    // just pass it up
    commentCreated(comment) {
      this.$emit("comment-created", comment);
    }
  }
};
</script>

<style lang="scss">
.comments {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  &__empty-area {
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
  }
  &__title {
    text-align: left;
    margin-bottom: 30px;
  }
  &__comment-create-container {
    margin-top: 20px;
  }
}
.comment-wrapper {
  & + & {
    margin-top: 20px;
  }
}
.comments-title {
  font-size: 2rem;
  font-weight: 600;
}
</style>

<template>
  <div class="comment">
    <div class="comment__text comment-text">
      {{ text }}
    </div>
    <div class="comment__meta comment--meta-text_small">
      <span class="comment-username meta-item"> {{ username }}</span>
      <span class="comment-date meta-item"> {{ date | beautifyDate }}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["source"],
  computed: {
    text() {
      return this.source?.text;
    },
    username() {
      return this.source?.username;
    },
    date() {
      return this.source?.commentDate;
    }
  },
  filters: {
    beautifyDate(uglyDate) {
      return moment(uglyDate).format("ll");
    }
  }
};
</script>

<style lang="scss">
.comment {
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 15px;
  border: 0px;
  border-radius: 12px;
  &__text {
    margin-bottom: 10px;
  }
  &__meta {
    display: flex;
    justify-content: flex-end;
  }
  &--meta-text_small {
    font-size: 0.8rem;
  }
}
.comment-text {
  text-align: left;
}
.meta-item {
  & + & {
    margin-left: 10px;
  }
}

.comment-date {
  color: gray;
}
.comment-username {
  color: darken($color: gray, $amount: 0.8);
}
</style>

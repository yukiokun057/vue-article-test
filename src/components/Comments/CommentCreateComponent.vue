<template>
  <div class="comment-creation">
    <textarea
      class="comment-creation-text"
      v-model="text"
      name="new-comment"
      placeholder="Начните писать ..."
    />
    <button
      class="comment-creation__submit-button submit-button"
      type="button"
      @click="addButtonClicked"
    >
      Добавить
    </button>
  </div>
</template>

<script>
import { Comment } from "../../entities";
import moment from "moment";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addButtonClicked() {
      this.$emit(
        "comment-created",
        new Comment({
          text: this.text,
          commentDate: moment().toISOString(),
          username:
            this.$store.state.auth.user?.name ?? "Ops...smth wrong with auth"
        })
      );
      this.clear();
    },
    clear() {
      this.text = "";
    }
  }
};
</script>

<style lang="scss">
.comment-creation {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__submit-button {
    align-self: flex-end;
    margin-top: 10px;
  }
}
.comment-creation-text {
  width: 100%;
  height: 100px;
  border-radius: 12px;
  outline: none !important;
  box-sizing: border-box;
  padding: 14px;
  resize: none;
}
</style>

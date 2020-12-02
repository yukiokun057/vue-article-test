<template>
  <ModalBaseComponent class="modal-view">
    <div class="modal-view__header" slot="header">Sign Up</div>
    <div class="modal-view__body form" slot="body">
      <input
        class="form__item"
        type="text"
        v-model="login"
        placeholder="login"
      />
      <input class="form__item" type="text" v-model="name" placeholder="name" />
      <input
        class="form__item"
        type="text"
        v-model="password"
        placeholder="password"
      />
    </div>
    <div class="modal-view__footer" slot="footer">
      <button type="button" @click="$emit('close')">Cancel</button>
      <button
        type="button"
        @click.stop="
          $emit('submit', { login: login, password: password, name: name })
        "
      >
        Sign Up
      </button>
    </div>
  </ModalBaseComponent>
</template>

<script>
import ModalBaseComponent from "./ModalBaseComponent";
export default {
  components: {
    ModalBaseComponent
  },
  data() {
    return {
      name: "",
      password: "",
      login: ""
    };
  }
};
</script>

<style lang="scss">
.modal-view {
  &__header {
  }
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__footer {
  }
}

.form {
  &__item {
    & + & {
      margin-top: 20px;
    }
  }
}
</style>

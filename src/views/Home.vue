<template>
  <div class="page">
    <div v-if="isAuthorised" class="page__user-info">
      Hi, {{ name }} 👋
      <button type="button" @click="$store.dispatch('auth/logout')">
        Logout
      </button>
    </div>
    <div v-else class="auth-container">
      <button type="button" @click="isSignInModalShown = true">Sign In</button>
      <button type="button" @click="isSignUpModalShown = true">Sign Up</button>
    </div>
    <ModalSignIn
      v-show="isSignInModalShown"
      @submit="signIn"
      @close="isSignInModalShown = false"
    />
    <ModalSignUp
      v-show="isSignUpModalShown"
      @submit="signUp"
      @close="isSignUpModalShown = false"
    />
  </div>
</template>

<script>
import ModalSignIn from "../components/Modal/ModalSignInComponent";
import ModalSignUp from "../components/Modal/ModalSignUpComponent";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ModalSignIn,
    ModalSignUp
  },
  computed: {
    ...mapGetters({
      isAuthorised: "auth/isAuthorised"
    }),
    ...mapState({
      name: state => state.auth.user.name
    })
  },
  data() {
    return {
      isSignInModalShown: false,
      isSignUpModalShown: false
    };
  },
  methods: {
    async signIn(loginAndPassword) {
      await this.$store.dispatch("auth/signIn", loginAndPassword);
      this.isSignInModalShown = false;
    },
    async signUp(loginNameAndPassword) {
      await this.$store.dispatch("auth/signUp", loginNameAndPassword);
      this.isSignUpModalShown = false;
    }
  }
};
</script>

<style lang="scss">
@import "../styles";
.page {
  &__user-info {
    display: flex;
    flex-direction: column;
  }
}
</style>

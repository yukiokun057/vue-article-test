<template>
  <div class="article">
    <div class="article__title article-title">
      {{ title }}
    </div>
    <div class="article__text article-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["source"],
  computed: {
    title() {
      return this.source?.title ?? "";
    },
    text() {
      return this.source?.text ?? "";
    }
  }
};
</script>

<style lang="scss">
.article {
  display: flex;
  flex-direction: column;
  &__title {
    text-align: left;
  }
  &__text {
    text-align: justify;
  }
}
.article-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
}
.article-text {
}
</style>

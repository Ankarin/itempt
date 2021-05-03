<template>
  <div class="posts-wrapper">
    <PostComponent
      v-for="(post, i) in posts"
      :key="i"
      :i="i"
      :post="post"
      variant="1"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import PostComponent from "../components/PostComponent";

export default {
  name: "Home",
  components: {
    PostComponent,
  },

  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style lang="scss" scoped>
.posts-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
}
</style>

<template>
  <div>
    <PostComponent :i="$route.params.id-1" v-if="post" :post="post" />
    <Comments :comments="comments" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import PostComponent from "@/components/PostComponent.vue";
import Comments from "@/components/Comments.vue";
export default {
  components: {
    PostComponent,
    Comments,
  },
  data() {
    return {};
  },
  mounted() {
    this.setPost(this.$route.params.id);
  },

  methods: {
    ...mapActions(["setPost"]),
  },
  computed: {
    ...mapState(["post", "comments"]),
  },
};
</script>

<style lang="scss" scoped></style>

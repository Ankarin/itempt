<template>
  <div>
    <PostForm :postIt="postIt"></PostForm>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostForm from "@/components/PostForm.vue";
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    postIt(post) {
      this.addPost(post);
    },
    ...mapActions(["addPost"]),
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <PostForm :edit="true" :selectedPost="selectedPost" :postIt="postIt"></PostForm>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
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
  computed: {
      selectedPost() {
let id = this.$route.params.id - 1
let post = this.posts[id]
return post
      },
     ...mapState(['posts'])
  },
  methods: {
    postIt(post) {
       
      this.editPost({post:post,key:this.$route.params.id - 1  });
    },
    ...mapActions(["editPost",]),
  },
};
</script>

<style lang="scss" scoped></style>

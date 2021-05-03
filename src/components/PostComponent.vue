<template>
  <v-card>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>User: {{ post.userId }}</v-card-subtitle>
    <v-card-text>{{ post.body }}</v-card-text>
    <v-card-actions class="post-card-actions"
      ><v-btn v-if="variant == 1" class="primary" @click="openPost()"
        >Explore</v-btn
      >
      <div v-else></div>
      <div class="post-card-editing">
        <v-btn class="secondary" @click="editPost">Edit</v-btn>
        <v-btn class="error" @click="deleteIt">Delete</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["post", "variant", "i"],

  data: () => ({}),
  methods: {
    openPost() {
      this.$router.push(`post/${this.i+1}`);
    },
    editPost() {
      this.$router.push(`/edit-post/${this.i+1}`);
    },
    deleteIt() {
this.deletePost(this.i)
    },
    ...mapActions(['deletePost'])
  },
};
</script>

<style lang="scss" scoped>
.post-card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.post-card-editing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>

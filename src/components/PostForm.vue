<template>
  <div>
    <v-card>
        <v-card-title v-if="edit">Edit Post</v-card-title>
      <v-card-title v-else>New Post</v-card-title>
      <v-card-text>
        <v-text-field outlined label="Title" v-model="post.title"></v-text-field>
        <v-textarea label="Text" v-model="post.body" outlined></v-textarea>
        <v-btn @click="save" block class="primary">Save</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["postIt", 'edit','selectedPost'],
  data() {
    return {
        post:{
     title: "",
      body: "",
      userId: 1,
        }
      
    };
  },
  methods: {
    save() {
      this.postIt(this.post);
    },
  },
  mounted() {
      if(this.edit) {
          this.post = this.selectedPost
      }
  },
};
</script>

<style lang="scss" scoped></style>

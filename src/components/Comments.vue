<template>
  <div>
    <br />
    <h1>Comments:</h1>
    <br />
    <div class="coments-list">
      <v-card v-for="(comment, i) in comments" :key="i">
        <v-card-title>{{ comment.name }}</v-card-title>
        <v-card-subtitle>{{ comment.email }}</v-card-subtitle>
        <v-card-text>{{ comment.body }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments"],
};
</script>

<style lang="scss" scoped>
.coments-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
</style>

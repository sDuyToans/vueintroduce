<script>
export default {
  name: "PageViewer",
  props: ['index'],
  inject: ['$pages'],
  created(){
    this.page = this.$pages.getSinglePage(this.index);
    // this.$watch(() => this.$route.params, (newParams, prevParams) => {
    //   this.page = this.$pages.getSinglePage(newParams.index);
    // } )
    // console.log(this.$route.params);
  },
  data(){
    return {
      page: null
    };
  },
  watch: {
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
}
  }
}
</script>

<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<style scoped>
.emphasize{
  color: blue;
}
</style>
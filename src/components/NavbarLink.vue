<script>
export default {
  name: "NavbarLink",
  props:  ['page', 'index'],
}
</script>

<template>
  <li>
    <router-link
        :to="`/${index}`"
        class="nav-link"
        active-class="active emphasize"
        aria-current="page"
        :title="`This link goes to the ${page.link.text} page`"
    >{{ page.link.text }}</router-link>
  </li>
</template>

<style scoped>
  .emphasize{
    text-decoration: underline !important;
  }
</style>
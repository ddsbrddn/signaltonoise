<template>
  <ul>
    <li v-for="(tag, index) in tags" :key="index" >
      <nuxt-link :to="{ path: tags.slug }">{{ tags.name }}</nuxt-link>
    </li>
  </ul>
</template>


<script>
  import { getTags } from '../../api/tags'

  export default {
    async asyncData () {
      const tags = await getTags();
      return { tags: tags }
    }
  }
</script>

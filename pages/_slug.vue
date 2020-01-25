<template>
<v-container fluid>
  <div>
	  <img :src="post" />
    <h1>{{ post.title }}</h1>
    <div v-html="post.html"/>
  </div>
</v-container>
</template>

<script>
  import { getSinglePost } from '../api/posts';

  export default {
    async asyncData ({ params }) {
      const post = await getSinglePost(params.slug);
      return { post: post }
    }
  }
</script>

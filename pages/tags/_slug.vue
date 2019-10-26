<template>
<v-container fluid>
  <div>
	  <img :src="tag.feature_image" />
    <h1>{{ tag.name }}</h1>
	<h3>{{ tag.description }}</h3>
    <div v-html="tag.html"/>
  </div>
</v-container>
</template>

<script>	
  import { getSingleTag } from '../../api/tags';

  export default {
    async asyncData ({ params }) {
      const tag = await getSingleTag(params.slug);
      return { tag: tag }
    }
  }
</script>
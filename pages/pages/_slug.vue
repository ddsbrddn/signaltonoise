<template>
<v-container fluid>
  <div>
	  <img :src="page.feature_image" />
    <h1>{{ page.title }}</h1>
	<article>
		<section class="page-content">
      {{ page.content }}
			
			</section>
			</article>
    </div>

</v-container>
</template>

<script>
  import { getSinglePage } from '../../api/pages';

  export default {
    async asyncData ({ params }) {
      const page = await getSinglePage(params.slug);
      return { page: page }
    }
  }
</script>

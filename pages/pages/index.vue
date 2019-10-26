<template>
	<v-container fluid>
      <v-row dense>
        <v-col         
		  v-for="(page, index) in pages" :key="index"
        >

  <v-card
    class="mx-auto"
    max-width="400"
  >
  <nuxt-link :to="{ path: page.slug }">
    <!-- <v-img
      class="grey--text align-end"
      height="200px"
      :src="page.img_url"
    >
	{{page.feature_image }}
      <v-card-title>{{ page.title }}</v-card-title>
    </v-img> -->

	<img 
		class="align-end"
      	height="200px"	
		:src="page.feature_image" 
		/>

	

    <v-card-title class="grey--text pb-0">{{ page.title }}</v-card-title>
	</nuxt-link>

    <v-card-text class="text--primary">
      <div>{{ page.excerpt }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

	      </v-col>
      </v-row>

<!-- <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>

	{{pagination}}
  </div> -->

    </v-container>
</template>

<script>
  import { getPages } from '../../api/pages'

  export default {
    async asyncData () {
      const pages = await getPages();
      return { pages: pages }
    }
  }
</script>


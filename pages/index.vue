// <template>
//   <ul>
//     <li v-for="(post, index) in posts" :key="index" >
//       <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
//     </li>
//   </ul>
// </template>

<template>
	<v-container fluid>
      <v-row dense>
        <v-col         
		  v-for="(post, index) in posts" :key="index"
        >

  <v-card
    class="mx-auto"
    max-width="400"
  >
  <nuxt-link :to="{ path: post.slug }">
    <!-- <v-img
      class="grey--text align-end"
      height="200px"
      :src="post.img_url"
    >
	{{post.feature_image }}
      <v-card-title>{{ post.title }}</v-card-title>
    </v-img> -->

	<img 
		class="align-end"
      	height="200px"	
		:src="post.feature_image" 
		>

		</img> 

    <v-card-title class="grey--text pb-0">{{ post.title }}</v-card-title>
	</nuxt-link>

    <v-card-text class="text--primary">
      <div>{{ post.excerpt }}</div>
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
      v-model="post"
      :length="6"
    ></v-pagination>

	{{pagination}}
  </div> -->

    </v-container>
</template>

<script>
  import { getPosts } from '../api/posts'

  export default {
    async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
  }
</script>


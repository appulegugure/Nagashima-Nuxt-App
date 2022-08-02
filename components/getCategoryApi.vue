<script setup >
console.log('GETCATEGORYAPI')
const route = useRoute()
const router = useRouter();
console.log(route.params.category)
const { data: posts } = await useLazyFetch('http://52.88.36.114:8080/show/' + route.params.category )

</script>
<template>
  <div>
    <div class="item-wrap">
      <div v-for="post in posts" :key="post">
        <!-- <p>{{post}}</p> -->
        <PartsItemArticle
          :ArticleTitle="post.title"
          :ArticleImage="post.img"
          :ArticleText="post.body"
          :ArticleSource="post.Id"
        >
        </PartsItemArticle>
        <!-- <NuxtLink :to="post.Id">KOKOOSE</NuxtLink> -->
        <!-- <NuxtLink :to="'/study-content/' + post.Id">test</NuxtLink> -->
      </div>
    </div>
  
    
    
  </div>
</template>
<style scoped>
.item-wrap{
  display: flex;
  overflow-x: scroll;
}
</style>
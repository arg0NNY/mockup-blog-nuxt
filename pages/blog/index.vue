<template>
  <div class="grid bloggrid">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>

  <div class="clearfix"></div>
  <BasePagination :total="chunked.length" />
</template>

<script setup lang="ts">
import type { Post } from '~/types'

useHead({
  title: 'Blog'
})

const route = useRoute()
const page = computed(() => +(route.query.page ?? 1))
watch(page, () => document.documentElement.scrollTop = 0)

const { data: allPosts, error } = await useApiFetch<Post[]>('/posts')
if (error.value) throw createInternalError()

const chunked = computed(() => chunk(allPosts.value ?? [], 6))
const posts = computed(() => chunked.value[page.value - 1])

/**
 * Template's grid external package fix
 */
onMounted(() => {
  window.$grid = window.jQuery?.('.grid').masonry({
    itemSelector: 'article'
  });
})

watch(posts, () => nextTick(() => {
  window.$grid?.masonry?.('reloadItems')
  window.$grid?.masonry?.('layout')

  window.$grid?.imagesLoaded?.().progress( function() {
    $grid.masonry('layout');
  });
}))
</script>

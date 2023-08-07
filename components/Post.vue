<template>
  <article>
    <header class="entry-header">
      <h1 class="entry-title"><NuxtLink :to="`/blog/${post.id}`" rel="bookmark">{{ post.title }}</NuxtLink></h1>
      <div class="entry-meta">
        <span class="posted-on"><time class="entry-date published">{{ formatDate(post.createdAt) }}</time></span>
      </div>
      <div class="entry-thumbnail">
        <img :src="post.image" :alt="post.title">
      </div>
    </header>
    <div class="entry-summary">
      <p>
        {{ post.preview }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { formatDate } from '~/utils/format'

const props = defineProps<{
  post: Post
}>()
</script>

<style scoped>

</style>

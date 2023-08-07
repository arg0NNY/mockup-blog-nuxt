<template>
  <article v-if="post">
    <header class="entry-header">
      <h1 class="entry-title">{{ post.title }}</h1>
      <div class="entry-meta">
        <span class="posted-on"><time class="entry-date published">{{ formatDate(post.createdAt) }}</time></span>
      </div>
      <div class="entry-thumbnail">
        <img :src="post.image" :alt="post.title">
      </div>
    </header>
    <!-- .entry-header -->
    <div class="entry-content">
      {{ post.description }}
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { formatDate } from '~/utils/format'

const route = useRoute()

const { data: post, error } = await useApiFetch<Post>(`/posts/${route.params.id}`)
if (error.value?.statusCode === 404) throw createNotFoundError()
if (error.value) throw createInternalError()
</script>

<style scoped>

</style>

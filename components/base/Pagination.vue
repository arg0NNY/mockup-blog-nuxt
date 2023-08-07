<template>
  <nav class="pagination">
    <NuxtLink v-if="page > 1" class="page-numbers" :to="to(page - 1)">« Previous</NuxtLink>
    <component
      v-for="item in items"
      :is="item === page || item === '...' ? 'span' : NuxtLink"
      class="page-numbers"
      :class="{ current: item === page }"
      :to="to(item)"
    >{{ item }}</component>
    <NuxtLink v-if="page < total" class="page-numbers" :to="to(page + 1)">Next »</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { RouteLocation } from 'vue-router'

const props = withDefaults(
  defineProps<{
    total: number,
    displayedOffset?: number
  }>(),
  {
    displayedOffset: 1
  }
)

const route = useRoute()
const page = computed(() => +(route.query.page ?? 1))

const to = (page: number | string) => <RouteLocation>{ query: { ...route.query, page } }

const items = computed(
  () => [].concat(page.value > props.displayedOffset + 1 ? [1] : [])
    .concat(page.value > props.displayedOffset + 2 ? ['...'] : [])
    .concat(
      Array.from({ length: props.total }, (_, i) => i + 1)
        .filter(i => Math.abs(i - page.value) <= props.displayedOffset)
    )
    .concat(props.total - page.value > props.displayedOffset + 1 ? ['...'] : [])
    .concat(props.total - page.value > props.displayedOffset ? [props.total] : [])
)
</script>

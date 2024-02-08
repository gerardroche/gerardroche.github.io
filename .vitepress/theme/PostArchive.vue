<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from './posts.data.js'

const props = defineProps({
  tag: {
    type: String,
    default: null,
  },
})

const { lang } = useData()

function formatDatetime(date) {
  return new Date(date).toISOString()
}

function formatDate(date) {
  const dateTimeFormat = new Intl.DateTimeFormat(lang.value, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return dateTimeFormat.format(new Date(date))
}

const posts = computed(() => {
  return data.filter(post => {
    if (props.tag && post.frontmatter.tags) {
      return post.frontmatter.tags.includes(
        props.tag,
      )
    }
    return true
  })
})
</script>

<template>
  <ul class="posts">
    <li v-for="post in posts" :key="post.url">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <time :datetime="formatDatetime(post.frontmatter.date)">
        {{ formatDate(post.frontmatter.date) }}
      </time>
    </li>
  </ul>
</template>

<style scoped>
.posts {
  padding-left: 0;
}

.posts li {
  list-style-type: none;
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.posts li a {
  flex: 1;
/*  color: #333; text-decoration: none;*/
}

.posts li time {
  margin-left: 10px;
  font-style: italic;
}
</style>

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
  <section class="posts">
    <article v-for="post in posts" :key="post.url" class="post">
      <header>
        <time :datetime="formatDatetime(post.frontmatter.date)">
          {{ formatDate(post.frontmatter.date) }}
        </time>
        <a :href="post.url">
          <h2>{{ post.frontmatter.title }}</h2>
        </a>
      </header>
      <div v-if="post.frontmatter.excerpt || post.frontmatter.description" class="excerpt">
        {{ post.frontmatter.excerpt || post.frontmatter.description }}
        <br>
      </div>
    </article>
  </section>
</template>

<style scoped>

.posts {
  margin: 0 auto;
}

.post {
  min-height: 10em;
  padding: 1.5em 2.5em;
  position: relative;
  overflow: hidden;
}

.post header {
  text-align: center;
}

.post header time {
  font-size: 16px;
  margin-bottom: 10px;
}

.posts header a {
    color: var(--vp-c-text-1);
    text-decoration: none;
}

.post header h2 {
  padding: 0;
  margin: 5px 0 25px 0;
  border: none;
  font-size: 30px;
  letter-spacing: normal;
  font-weight: 700;
}

.post .excerpt {
  font-size: 20px;
  line-height: 28px;
}
</style>

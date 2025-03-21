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
        <h2><a :href="post.url">{{ post.frontmatter.title }}</a></h2>
      </header>
      <div v-if="post.frontmatter.excerpt || post.frontmatter.description" class="excerpt">
        <p>{{ post.frontmatter.excerpt || post.frontmatter.description }} <a :href="post.url">»</a></p>
      </div>
      <time :datetime="formatDatetime(post.frontmatter.date)">
        {{ formatDate(post.frontmatter.date) }}
      </time>
    </article>
  </section>
</template>

<style scoped>

.posts {
  max-width: 900px;
  margin: 0 30px;
  margin-top: 100px;
}

.post {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
}
.post header h2 {
  padding: 0;
  margin: 0 0 0.4em 0;
  border: none;
  font-size: 2rem;
  line-height: 1.15em;
}

.post header h2 a {
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.post p {
  margin-top: 0;
}

.post p a {
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.post time {
  font-size: 0.9rem;
}

</style>

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
        <h2>{{ post.frontmatter.title }}</h2>
      </header>
      <div v-if="post.frontmatter.excerpt" class="excerpt">
        {{ post.frontmatter.excerpt }}
        <br>
      </div>
      <div class="more">
        <a :href="post.url">Read more</a>
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
  padding: 1.25em 2.5em;
  position: relative;
  overflow: hidden;
}

.post header {
  text-align: center;
}

.post header time {
  font-size: 12px;
}

.post header h2 {
  padding: 0;
  margin: 0 0 1em 0;
  border: none;
  font-size: 27px;
  font-weight: 700;
}

.post .excerpt {
  font-size: 18px;
  margin-bottom: 1em;
}

.post .more {
  text-align: center;
}

.post .more a {
  border: 1px solid var(--vp-c-divider);
  display: inline-block;
  padding: .2em 2em;
  text-decoration: none;
  font-size: 12px;
}

</style>

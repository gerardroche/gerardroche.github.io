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
  padding: 1.8em 2.5em;
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
  margin-bottom: 30px;
}

.post .more {
  text-align: center;
}

.post .more a {
  border: 1px solid var(--vp-c-divider);
  display: inline-block;
  padding: .3em 1em;
  text-decoration: none;
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
}

.post .more a:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-divider);
}

</style>

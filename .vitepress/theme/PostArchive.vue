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
    <article class="post" v-for="post in posts" :key="post.url">
      <header>
        <time :datetime="formatDatetime(post.frontmatter.date)">
          {{ formatDate(post.frontmatter.date) }}
        </time>
        <h2>{{ post.frontmatter.title }}</h2>
      </header>
      <div class="excerpt" v-if="post.frontmatter.excerpt">
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
  padding: 2.5em;
  padding-bottom: 0;
  margin-bottom: 1.25em !important;
  border: 1px solid var(--vp-c-divider);
  border-radius: .2em;
  box-shadow: var(--vp-shadow-2);
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
  margin: 0;
  margin-bottom: 1em;
  border: none;
  font-size: 26px;
  font-weight: 700;
}

.post .excerpt {
  font-size: 17px;
}

.post .more {
  text-align: center;
  margin: 1.5em;
}

.post .more a {
  margin: 0;
  padding: .3em 2em;
  border-radius: 3rem;
  border: 1px solid var(--vp-c-divider);
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

</style>

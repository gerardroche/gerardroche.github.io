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

function truncate(text, length) {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
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
    <li
      v-for="post in posts"
      :key="post.url"
      class="post"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <header>
        <h2 itemprop="headline">
          <a
            :href="post.url"
            :aria-label="`Read ${post.frontmatter.title}`"
            itemprop="url"
          >
            {{ post.frontmatter.title }}
          </a>
        </h2>
      </header>

      <div
        v-if="post.frontmatter.excerpt || post.frontmatter.description"
        class="excerpt"
        itemprop="description"
      >
        <p>
          {{ truncate(post.frontmatter.excerpt || post.frontmatter.description, 250) }}
          <a
            :href="post.url"
            :aria-label="`Read more about ${post.frontmatter.title}`"
          >»</a>
        </p>
      </div>

      <time
        :datetime="formatDatetime(post.frontmatter.date)"
        itemprop="datePublished"
      >
        {{ formatDate(post.frontmatter.date) }}
      </time>

      <div v-if="post.frontmatter.tags" class="tags">
        <span
          v-for="post_tag in post.frontmatter.tags.split(' ')"
          :key="post_tag"
          class="tag"
          itemprop="keywords"
        >
          {{ post_tag }}
        </span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.posts {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.post {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post:last-child {
  border-bottom: none;
}

.post header h2 {
  margin: 0 0 0.4rem;
  padding: 0;
  border: none;
  font-size: 2rem;
  line-height: 1.15;
}

.post header h2 a {
  color: var(--vp-c-text-1);
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
}

.post header h2 a:hover,
.post header h2 a:focus {
  color: var(--vp-c-brand);
  outline: none;
}

.excerpt p {
  margin: 0 0 0.5rem;
  line-height: 1.6;
}

.excerpt a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.excerpt a:hover,
.excerpt a:focus {
  color: var(--vp-c-brand);
  outline: none;
}

.post time {
  display: block;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.tags {
  margin: 0.5rem 0 0;
}

.tag {
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.25rem 0.75rem;
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
  font-size: 0.85rem;
  transition: background 0.2s ease;
}

.tag:hover {
  background: var(--vp-c-gray-light-3);
}

@media (max-width: 767px) {
  .posts {
    max-width: 100%;
    padding: 0 1rem;
  }

  .post header h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 479px) {
  .post header h2 {
    font-size: 1.5rem;
  }

  .tag {
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style>

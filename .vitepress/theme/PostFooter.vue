<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.post" class="vp-doc post-footer">
    <p>Be notified of new posts. <a href="/feed.xml">Subscribe to the feed.</a></p>
    <p>What are your questions? Ask me anything on <a href="https://x.com/gerardroche_">X</a> or <a href="https://github.com/gerardroche/gerardroche.github.io/discussions">GitHub</a>.</p>

    <!-- <div v-if="frontmatter.tags" class="tags">
      <span v-for="tag in frontmatter.tags.split(' ')" :key="tag" class="tag">
        <a :href="`/tags/${tag}/`">{{ tag }}</a>
      </span>
    </div> -->
  </div>
</template>

<style scoped>
.post-footer {
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.post-footer a {
  color: var(--vp-c-text-2);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tag {
  margin-right: 8px;
}

.tag a {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  text-decoration: none;
  border-radius: 4px;
  background-color: var(--vp-c-gray-soft);
  font-weight: normal;
}
</style>

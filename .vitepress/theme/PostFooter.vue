<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.post" class="vp-doc post-footer">
    <p>What are your questions? Ask on <a href="https://x.com/gerardroche_">X</a> and <a href="https://github.com/gerardroche/gerardroche.github.io/discussions">GitHub</a>.</p>
    <p>Be notified of new posts. <a href="/feed.xml">Subscribe to the feed.</a></p>
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

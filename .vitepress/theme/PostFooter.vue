<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.post" class="vp-doc post-footer">
    <p>What are your questions? Ask me anything on <a href="https://x.com/gerardroche_">X</a> or <a href="https://github.com/gerardroche/gerardroche.github.io/discussions">GitHub</a>.</p>

    <p>Be notified of new posts. <a href="/feed.xml">Subscribe to the feed.</a></p>

    <div v-if="frontmatter.tags" class="tags">
      <span v-for="tag in frontmatter.tags.split(' ')" :key="tag" class="tag">
        <a :href="`/tags/${tag}/`">{{ tag }}</a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.post-footer {
  margin-top: -16px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
}

.tag {
  background-color: #3451b211;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px 8px 4px 0px;
  display: flex;
  align-items: center;
}

.tag a {
  text-decoration: none;
  margin-right: 4px;
  font-weight: normal;
}

.tag span {
  color: #555;
  font-size: 0.8em;
}
</style>

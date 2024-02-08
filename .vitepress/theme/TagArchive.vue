<script setup>
import { computed } from 'vue'
import { data } from './posts.data.js'

const tags = computed(() => {
  const tagsWithCount = data
    .map(post => post.frontmatter.tags.split(' '))
    .flat()
    .reduce((tags, tag) => {
      const existingTag = tags.find(item => item.name === tag)

      if (existingTag) {
        existingTag.count++
      } else {
        tags.push({ name: tag, count: 1 })
      }

      return tags
    }, [])

  return tagsWithCount.sort((a, b) => a.name.localeCompare(b.name))
})
</script>

<template>
  <div class="tags">
    <div v-for="tag in tags" :key="tag.name" class="tag">
      <a :href="`/tags/${tag.name}/`">{{ tag.name }} <span>{{ tag.count }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px;
  display: flex;
  align-items: center;
}

.tag a {
  color: #333;
  text-decoration: none;
}

.tag span {
  color: #555;
  font-size: 0.8em;
}
</style>

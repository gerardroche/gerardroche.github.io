import { createContentLoader } from 'vitepress'
import { transformPosts } from './useTransformers.js'

export default createContentLoader('../src/*/*/*/*/index.md', {
  transform(raw) {
    return transformPosts(raw)
  },
})

import { createContentLoader } from 'vitepress'
import { transformPosts } from './useTransformers.js'

export default createContentLoader('../src/20*/*/*/*/index.md', {
  transform(raw) {
    return transformPosts(raw)
  },
})

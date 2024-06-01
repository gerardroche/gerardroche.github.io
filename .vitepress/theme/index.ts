import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostFooter from './PostFooter.vue'
import PostArchive from './PostArchive.vue'
import TagArchive from './TagArchive.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(PostFooter),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PostArchive', PostArchive)
    app.component('TagArchive', TagArchive)
  }
} satisfies Theme

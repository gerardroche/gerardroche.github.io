// https://vitepress.dev/guide/custom-theme
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
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(PostFooter),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PostArchive', PostArchive)
    app.component('TagArchive', TagArchive)
  }
} satisfies Theme

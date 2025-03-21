 
import { defineConfig } from 'vitepress'
import { buildEnd } from './buildEnd.config'
import markdownItFootnote from 'markdown-it-footnote'

const title = 'Gerard Roche'
const description = 'a blog by Gerard Roche on programming and software development'
const url = 'https://blog.gerardroche.com'

export default defineConfig({
  title,
  description,
  lang: 'en',
  srcDir: 'src',
  srcExclude: ['reusables/**'],
  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },

  head: [
    ['link', { rel: 'alternate', type: 'application/atom+xml', title: 'Feed', href: `${url}/feed.xml` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@gerardroche_' }],
    ['meta', { name: 'twitter:image', content: `${url}/avatar-348129117e24fd643844da229e59d136.jpg` }],
    ['meta', { property: 'og:url', content: `${url}/` }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: `${url}/avatar-348129117e24fd643844da229e59d136.jpg` }],
  ],

  sitemap: {
    hostname: url,
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
    },
  },

  transformPageData(pageData) {
    const canonicalUrl = `${url}/${pageData.relativePath}`
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '/')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    pageData.frontmatter.head.push(['meta', { property: 'og:title', content: pageData.title || title }])
    pageData.frontmatter.head.push(['meta', { property: 'og:description', content: pageData.frontmatter.excerpt || pageData.description || description }])

    return pageData
  },

  buildEnd,

  themeConfig: {

    nav: [
      { text: 'About', link: 'https://www.gerardroche.com', noIcon: true },
    ],

    sidebar: {

    },

    logo: {
      src: '/avatar.svg',
      alt: 'Avatar',
    },

    lastUpdated: false,

    editLink: {
      pattern: 'https://github.com/gerardroche/gerardroche.github.io/edit/master/src/:path',
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/gerardroche_' },
      { icon: 'github', link: 'https://github.com/gerardroche' },
    ],

    search: {
      provider: 'local',
    },
  },
})

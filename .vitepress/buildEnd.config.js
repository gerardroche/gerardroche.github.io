import path from 'path'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'
import { transformPosts } from './theme/useTransformers.js'
import { writeFileSync } from 'fs'

export const buildEnd = async(config) => {
  const feed = new Feed({
    title: 'Gerard Roche',
    description: 'Technical blog by Gerard Roche about programming and software development',
    id: 'https://blog.gerardroche.com/feed.xml',
    link: 'https://blog.gerardroche.com/',
    language: 'en-IE',
    favicon: 'https://blog.gerardroche.com/favicon.ico',
  })

  const posts = await createContentLoader('../src/*/*/*/*/index.md', {
    render: true,
    transform(raw) {
      return transformPosts(raw)
    },
  }).load()

  for (const { url, frontmatter, html } of posts.slice(0, 10)) {
    feed.addItem({
      title: frontmatter.title,
      id: 'https://blog.gerardroche.com' + url,
      link: 'https://blog.gerardroche.com' + url,
      date: new Date(frontmatter.lastUpdated),
      published: new Date(frontmatter.date),
      category: frontmatter.tags ? frontmatter.tags.split(' ').map(term => ({ term })) : [],
      author: [{
        name: 'Gerard Roche',
        link: 'https://x.com/gerardroche_',
      }],
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.atom1())
}

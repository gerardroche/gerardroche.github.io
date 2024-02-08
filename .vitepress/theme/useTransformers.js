function getDateFromUrl(url) {
  const hasDate = url.match(/^\/(\d{4}\/\d{2}\/\d{2})\//)

  if (hasDate) {
    return new Date(hasDate[1])
  }
}

export function transformPosts(raw) {
  return raw.map((page) => {
    if (!page.frontmatter.date) {
      page.frontmatter.date = getDateFromUrl(page.url)
    }

    return page
  }).sort((a, b) => b.frontmatter.date - a.frontmatter.date)
}

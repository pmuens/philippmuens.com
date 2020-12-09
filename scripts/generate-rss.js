const { join } = require('path')
const { Feed } = require('feed')
const { writeFile, ensureDir } = require('fs-extra')

const { getPostPath } = require('../lib/utils')
const { getAllPosts } = require('./utils')
const { author, domain, blogName, blogDescription } = require('../core.config')

const { log } = console
const publicDirPath = join(__dirname, '..', 'public')

async function main() {
  log('--- Building RSS feeds ---')

  const now = new Date()
  const feed = new Feed({
    title: blogName,
    description: blogDescription,
    id: domain,
    link: domain,
    language: 'en',
    favicon: `${domain}/favicon/favicon.ico`,
    copyright: `All rights reserved ${now.getFullYear()}, ${author}`,
    updated: now,
    generator: 'Next.js using "Feed" package',
    feedLinks: {
      rss2: `${domain}/rss/feed.xml`,
      json: `${domain}/rss/feed.json`,
      atom: `${domain}/rss/atom.xml`,
    },
    author: {
      name: author,
      link: domain,
    },
  })

  const posts = await getAllPosts()
  posts
    .filter((post) => !post.hidden)
    .forEach((post) => {
      // eslint-disable-next-line no-shadow
      const { title, description, content, author, date, slug } = post
      const postPath = getPostPath(slug)
      const url = domain + postPath

      feed.addItem({
        title,
        id: url,
        link: url,
        description,
        content,
        author: [author],
        contributor: [author],
        date: new Date(date),
      })
    })

  const rssDirPath = join(publicDirPath, 'rss')

  await ensureDir(rssDirPath)
  await writeFile(join(rssDirPath, 'feed.xml'), feed.rss2())
  await writeFile(join(rssDirPath, 'atom.xml'), feed.atom1())
  await writeFile(join(rssDirPath, 'feed.json'), feed.json1())
}

main()

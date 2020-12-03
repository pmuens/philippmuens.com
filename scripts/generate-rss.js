const { join } = require('path')
const { Feed } = require('feed')
const matter = require('gray-matter')
const remark = require('remark')
const html = require('remark-html')
const { readdir, readFile, writeFile, ensureDir } = require('fs-extra')

const { getPostPath } = require('../lib/utils')
const { author, domain, blogName, blogDescription } = require('../core.config')

const { log } = console
const postsDirPath = join(__dirname, '..', '_posts')
const publicDirPath = join(__dirname, '..', 'public')

async function getAllPosts() {
  const slugs = await readdir(postsDirPath)
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = join(postsDirPath, slug)
      const realSlug = slug.replace(/\.md$/, '')
      const fileContent = await readFile(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const fields = ['slug', 'title', 'description', 'content', 'author', 'date']
      const items = {}

      const contentAsHtml = (await remark().use(html).process(content)).toString()

      fields.forEach((field) => {
        if (field === 'slug') {
          items[field] = realSlug
        } else if (field === 'content') {
          items[field] = contentAsHtml
        } else if (field === 'author') {
          items[field] = { name: data[field].name, link: data[field].website }
        } else if (data[field]) {
          items[field] = data[field]
        }
      })

      return items
    })
  )
  // sort posts by date in descending order
  posts.sort((a, b) => (a.date > b.date ? '-1' : '1'))
  return posts
}

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
  posts.forEach((post) => {
    // eslint-disable-next-line no-shadow
    const { title, description, content, author, date } = post
    const postPath = getPostPath(post.slug)
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

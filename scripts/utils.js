const { join } = require('path')
const matter = require('gray-matter')
const remark = require('remark')
const md = require('remark-parse')
const remark2rehype = require('remark-rehype')
const stringify = require('rehype-stringify')
const { readdir, readFile } = require('fs-extra')

const postsDirPath = join(__dirname, '..', '_posts')

async function getAllPosts() {
  const slugs = await readdir(postsDirPath)
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = join(postsDirPath, slug)
      const realSlug = slug.replace(/\.md$/, '')
      const fileContent = await readFile(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const fields = ['slug', 'hidden', 'title', 'description', 'content', 'author', 'date']
      const items = {}

      const contentAsHtml = (
        await remark().use(md).use(remark2rehype).use(stringify).process(content)
      ).toString()

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

module.exports = {
  getAllPosts,
  postsDirPath,
}

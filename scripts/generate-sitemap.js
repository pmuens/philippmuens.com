const { join } = require('path')
const { writeFile } = require('fs-extra')

const { getPostPath } = require('../lib/utils')
const { getAllPosts } = require('./utils')
const { domain } = require('../core.config.js')

const { log } = console
const publicDirPath = join(__dirname, '..', 'public')

async function main() {
  log('--- Building sitemap.xml ---')

  const posts = await getAllPosts()
  posts.unshift(domain) // Adding `/`
  const urls = posts
    .map((post) => {
      const { slug } = post
      let url = domain
      if (slug) {
        const postPath = getPostPath(slug)
        url = domain + postPath
      }
      return `<url><loc>${url}</loc></url>`
    })
    .join('')

  let content = '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>'
  content += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

  return writeFile(join(publicDirPath, 'sitemap.xml'), content)
}

main()

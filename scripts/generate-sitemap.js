/* eslint-disable no-param-reassign */

const { join } = require('path')
const SitemapGenerator = require('sitemap-generator')
const { readFile, writeFile } = require('fs-extra')

const localhost = 'http://127.0.0.1:3000'
const { domain } = require('../core.config.js')

const sitemapFilePath = join(__dirname, '..', 'public', 'sitemap.xml')

const { log } = console

process.on('unhandledRejection', (err) => {
  log(err)
})

async function buildSitemap(url) {
  const generator = SitemapGenerator(`${url}`, {
    lastMod: true,
    stripQuerystring: false,
    filepath: sitemapFilePath,
  })

  generator.start()

  return new Promise((resolve, reject) => {
    generator.on('done', () => {
      log(`Created sitemap.xml for "${url}"...`)
      const result = generator.getSitemap()
      resolve(result)
    })

    generator.on('error', (error) => {
      reject(error)
    })
  })
}

function normalizeUrl(url) {
  url = !url.endsWith('/') ? `${url}/` : url
  return url
}

function updateUrls(content, oldUrl, newUrl) {
  oldUrl = normalizeUrl(oldUrl)
  newUrl = normalizeUrl(newUrl)
  content = content.replace(new RegExp(oldUrl, 'g'), newUrl)
  return content
}

async function main() {
  log('--- Building sitemap.xml ---')
  await buildSitemap(localhost)

  let content = await readFile(sitemapFilePath, 'utf8')
  content = updateUrls(content, localhost, domain)
  log(`Updated "${localhost}" URLs in "sitemap.xml" with "${domain}" URLs...`)

  // Add a newline because of https://stackoverflow.com/a/729795
  content = `${content}\n`

  return writeFile(sitemapFilePath, content)
}

main()

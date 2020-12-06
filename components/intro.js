import Link from 'next/link'
import { blogName, blogDescription } from '../core.config'
import { getPostPath } from '../lib/utils'

export default function Intro() {
  let description = blogDescription.split(' ')
  description[0] = description[0].toLowerCase()
  description = description.join(' ')

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {blogName}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link as={getPostPath('about-me')} href={getPostPath('about-me')}>
          <a className="underline">My</a>
        </Link>{' '}
        {description}
      </h4>
    </section>
  )
}

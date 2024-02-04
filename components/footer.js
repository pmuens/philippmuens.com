import Link from 'next/link'
import Container from './container'
import { getPostPath } from '../lib/utils'
import { author, twitterUrl } from '../core.config'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © {new Date().getFullYear()} {author}
          </h3>
          <div className="flex font-bold flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <Link as={getPostPath('about-me')} href={getPostPath('about-me')}>
              <a className="hover:underline">About Me</a>
            </Link>
            <a href={twitterUrl} target="_blank" rel="noreferrer" className="mx-3 hover:underline">
              Twitter
            </a>
            <Link as="/rss" href="/rss">
              <a className="hover:underline">RSS</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

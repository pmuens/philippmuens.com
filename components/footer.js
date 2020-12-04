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
            <Link as={getPostPath('about')} href={getPostPath('about')}>
              <a className="hover:underline">About Me</a>
            </Link>
            <a href={twitterUrl} target="_blank" rel="noreferrer" className="mx-3 hover:underline">
              Twitter
            </a>
            <Link as="/rss" href="/rss">
              <a className="hover:underline">RSS</a>
            </Link>
            <Link as="/subscribe" href="/subscribe">
              <a
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                target="_blank"
              >
                Subscribe
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/index.css'
import '../styles/prism-theme.css'
import { initGA, logPageView } from '../lib/analytics'
import { domain, blogName, blogDescription } from '../core.config'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    initGA()
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      logPageView()
    }
  }, [])

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView)
    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo
        title={blogName}
        description={blogDescription}
        canonical={domain}
        titleTemplate="%s - Philipp Muens"
      />
      <Component {...pageProps} />
    </>
  )
}

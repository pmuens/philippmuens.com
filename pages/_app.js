import { DefaultSeo } from 'next-seo'
import '../styles/index.css'
import { domain, blogName, blogDescription } from '../core.config'

export default function MyApp({ Component, pageProps }) {
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

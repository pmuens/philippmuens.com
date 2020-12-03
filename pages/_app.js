import { DefaultSeo } from 'next-seo'
import '../styles/index.css'
import { blogName, blogDescription } from '../core.config'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={blogName}
        description={blogDescription}
        titleTemplate="%s - Philipp Muens"
      />
      <Component {...pageProps} />
    </>
  )
}

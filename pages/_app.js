import { DefaultSeo } from 'next-seo'
import '../styles/index.css'
import { blogTitle, blogDescription } from '../core.config'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={blogTitle}
        description={blogDescription}
        titleTemplate="%s - Philipp Muens"
      />
      <Component {...pageProps} />
    </>
  )
}

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { trackingId } from '../core.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${trackingId}');`,
            }}
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

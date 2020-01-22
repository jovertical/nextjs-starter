import React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

            html {
              box-sizing: border-box;
            }

            body {
              font-family: 'Open Sans', sans-serif;
              background-color: #edf2f7;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

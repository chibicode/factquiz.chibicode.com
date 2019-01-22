import React from 'react'
import NextHead from 'next/head'

export const title = '『ファクトフルネス』チンパンジークイズ'
export const description = '世界の事実にまつわる12の問題を解いてみよう'
export const imageUrl = ''

const Head = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="/static/images/favicon.ico" />
    <meta property="og:locale" content="ja_JP" />
    <link rel="canonical" href="https://factquiz.chibicode.com/" />
    <meta property="og:url" content="https://factquiz.chibicode.com/" />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chibicode" />
    <meta name="twitter:creator" content="@chibicode" />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:description" content={description} />
    <meta name="description" content={description} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{"name":"${title}","@type":"WebSite","url":"https://factquiz.chibicode.com/","image":"${imageUrl}","headline":"${title}","@context":"http://schema.org"}`
      }}
    />
  </NextHead>
)

export default Head

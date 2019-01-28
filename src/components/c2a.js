/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import BookEMoji from './twemoji/1f4d9'
import GlassesEmoji from './twemoji/1f9d0'
import Book from './book'
import AmazonLink from './amazon-link'
import {submitButtonCss} from './outro'

const C2A = () => (
  <>
    <h3
      css={css`
        margin-top: -0.25rem;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        text-align: center;
      `}
    >
      <Emoji large>
        <GlassesEmoji />
      </Emoji>{' '}
      正解は『ファクトフルネス』に{' '}
      <Emoji large>
        <BookEMoji />
      </Emoji>
    </h3>
    <p>
      正解を知りたい方は、2019年1月に発売された『
      <AmazonLink>
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </AmazonLink>
      』の冒頭を読んでみてください。
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
    <p>
      <strong>Kindle版のサンプル</strong>
      にクイズの正解が載っています。サンプルは無料ですのでぜひ。
    </p>
    <p>
      <AmazonLink css={submitButtonCss}>Amazonで見る</AmazonLink>
    </p>
  </>
)

export default C2A

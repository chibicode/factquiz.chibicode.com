/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import BookEMoji from './twemoji/1f4d9'
import GlassesEmoji from './twemoji/1f9d0'
import Book from './book'
import AmazonLink from './amazon-link'
import SorryEmoji from './twemoji/1f647-1f3fb-200d-2642-fe0f'
import {submitButtonCss} from './outro'

const noOpLink = e => {
  e.preventDefault()
}

const Share2CA = () => (
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
        <SorryEmoji />
      </Emoji>{' '}
      シェアもお願いします！
      <Emoji large>
        <SorryEmoji />
      </Emoji>
    </h3>
    <p
      css={css`
        text-align: center;
      `}
    >
      もし「このクイズ、友達にもやらせたいな」と思っていただけたら、下のリンクをシェアしてください！
    </p>
    <p
      css={css`
        text-align: center;
        font-size: 1.2rem;
        letter-spacing: -1px;
        color: #074da2;
        font-weight: bold;
        margin-bottom: 1.5rem;
      `}
    >
      <a href="https://factquiz.chibicode.com" onClick={noOpLink}>
        https://factquiz.chibicode.com
      </a>
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      以下、質問を再度掲載していきます。
    </p>
  </>
)

export default Share2CA

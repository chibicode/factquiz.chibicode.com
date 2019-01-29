/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import SorryEmoji from './twemoji/1f647-1f3fb-200d-2642-fe0f'
import ExternalLink from './external-link'

const noOpLink = e => {
  e.preventDefault()
}

const Share2CA = ({isBottom}) => (
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
      もし「このクイズ、友達にもやらせたいな」と思っていただけたら、下のリンクをコピーして送ってください！
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
      {isBottom ? (
        <span
          css={css`
            color: #777;
          `}
        >
          このクイズについて詳しくは
          <ExternalLink href="https://github.com/chibicode/factquiz.chibicode.com">
            こちら
          </ExternalLink>
          。
        </span>
      ) : (
        <>以下、質問を再度掲載していきます。</>
      )}
    </p>
  </>
)

export default Share2CA

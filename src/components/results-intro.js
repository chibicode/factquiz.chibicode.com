/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import HappyMonkeyEmoji from './twemoji/1f435'
import HandMonkeyEmoji from './twemoji/1f649'
import MouthMonkeyEmoji from './twemoji/1f64a'
import CryingEmoji from './twemoji/1f62d'
import HappyEmoji from './twemoji/1f601'
import EyeEmoji from './twemoji/1f644'
import Emoji from './emoji'

const ResultsIntro = ({score}) => {
  let result
  if (score > 4) {
    result = 'win'
  } else if (score === 4) {
    result = 'tie'
  } else {
    result = 'lose'
  }
  return (
    <>
      <p
        css={css`
          text-align: center;
          color: #777;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        `}
      >
        『<strong>ファクトフルネス</strong>』クイズの結果
      </p>
      <h1
        css={css`
          margin: 0 0 0.5rem;
          text-align: center;
          font-size: 1.75rem;
          line-height: 1.2;
        `}
      >
        チンパンジー
        {result === 'win' ? (
          <>
            に
            <span
              css={css`
                color: #074da2;
              `}
            >
              勝利！
            </span>
          </>
        ) : result === 'tie' ? (
          'と引き分け！'
        ) : (
          <>
            に
            <span
              css={css`
                color: #dc2e44;
              `}
            >
              敗北！
            </span>
          </>
        )}
      </h1>
      <div
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-bottom: 1rem;
        `}
      >
        {result === 'win' ? (
          <>
            <Emoji>
              <HappyEmoji />
            </Emoji>{' '}
            <Emoji>
              <MouthMonkeyEmoji />
            </Emoji>
          </>
        ) : result === 'tie' ? (
          <>
            {' '}
            <Emoji>
              <EyeEmoji />
            </Emoji>{' '}
            <Emoji>
              <HandMonkeyEmoji />
            </Emoji>
          </>
        ) : (
          <>
            <Emoji>
              <CryingEmoji />
            </Emoji>{' '}
            <Emoji>
              <HappyMonkeyEmoji />
            </Emoji>
          </>
        )}
      </div>
    </>
  )
}

export default ResultsIntro

/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import HappyMonkeyEmoji from './twemoji/1f435'
import HandMonkeyEmoji from './twemoji/1f649'
import MouthMonkeyEmoji from './twemoji/1f64a'
import CryingEmoji from './twemoji/1f62d'
import HappyEmoji from './twemoji/1f601'
import EyeEmoji from './twemoji/1f644'
import Emoji from './emoji'

const colors = {
  win: '#074da2',
  tie: '#5207A2',
  lose: '#dc2e44'
}

const quietCss = css`
  text-align: center;
  color: #777;
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
`

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
          font-size: 0.825rem;
          margin-bottom: 0.25rem;
        `}
      >
        『<strong>ファクトフルネス</strong>』クイズの結果
      </p>
      <h1
        css={css`
          margin: 0rem;
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.2;
        `}
      >
        チンパンジー
        {result === 'win' ? (
          <>
            に
            <span
              css={css`
                color: ${colors.win};
              `}
            >
              勝利！
            </span>
          </>
        ) : result === 'tie' ? (
          <>
            と
            <span
              css={css`
                color: ${colors.tie};
              `}
            >
              引き分け！
            </span>
          </>
        ) : (
          <>
            に
            <span
              css={css`
                color: ${colors.lose};
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
          font-size: 2.75rem;
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
      <h2
        css={css`
          margin: 0;
          font-size: 1.5rem;
          text-align: center;
        `}
      >
        12問中「
        <span
          css={css`
            color: ${colors[result]};
          `}
        >
          {score}問
        </span>
        」正解！
      </h2>
      <p css={quietCss}>チンパンジーは平均「4問」正解します</p>
    </>
  )
}

export default ResultsIntro

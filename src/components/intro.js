/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import Emoji from './emoji'

const Intro = () => (
  <>
    <h1
      css={css`
        margin: 0;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.2;
      `}
    >
      『ファクトフルネス』
      <br />
      チンパンジークイズ
    </h1>
    <div
      css={css`
        text-align: center;
        font-size: 3rem;
      `}
    >
      <Emoji>
        <ThinkEmoji />
      </Emoji>{' '}
      <Emoji>
        <VsEmoji />
      </Emoji>{' '}
      <Emoji>
        <MonkeyEmoji />
      </Emoji>
    </div>
  </>
)

export default Intro

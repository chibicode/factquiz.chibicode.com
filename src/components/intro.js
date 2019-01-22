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
        margin: 0 0 1rem;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.2;
      `}
    >
      『ファクトフルネス』
      <br />
      チンパンジークイズ
    </h1>
    <p>
      <a href="https://amzn.to/2CMacFZ">
        <img
          src="/static/images/cover-obi.jpg"
          alt="FACTFULNESS ファクトフルネス"
          css={css`
            max-width: 180px;
            margin: 0 auto;
          `}
        />
      </a>
    </p>
    <p>
      2019年1月に発売された本『
      <a href="https://amzn.to/2CMacFZ">
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </a>
      』の冒頭には、世界の事実に関するクイズが載っています。
    </p>
    <p
      css={css`
        margin-bottom: 0;
      `}
    >
      どの問題もA・B・Cの3択問題です。もしチンパンジーにこのクイズを出したら、正解率は33%になります。
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1rem;
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
    <p>
      クイズは全部で12問。あなたはチンパンジーに勝てるでしょうか？ぜひチャレンジしてみてください！
    </p>
  </>
)

export default Intro

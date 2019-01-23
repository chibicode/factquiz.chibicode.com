/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import Emoji from './emoji'
import Book from './book'
import AmazonLink from './amazon-link'

const Intro = () => (
  <>
    <h1
      css={css`
        margin: 0 0 0.5rem;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.2;
      `}
    >
      『ファクトフルネス』
      <br />
      チンパンジークイズ
    </h1>
    <p
      css={css`
        text-align: center;
        font-size: 0.85rem;
        color: #777;
      `}
    >
      ファクトフルネス共訳者(上杉)作成
    </p>
    <p>
      <Book />
    </p>
    <p>
      2019年1月に発売された本『
      <AmazonLink href="https://amzn.to/2CMacFZ">
        <strong>FACTFULNESS (ファクトフルネス)</strong>
      </AmazonLink>
      』の冒頭には、世界の事実に関するクイズが載っています。
    </p>
    <p
      css={css`
        margin-bottom: 0;
      `}
    >
      どの質問もA・B・Cの3択です。つまり、仮にチンパンジーにこのクイズを出したら、正解率はだいたい「3分の1」になります。
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
      クイズは全部で12問。チンパンジーなら、だいたい4問正解します。あなたは
      <strong>5問以上正解</strong>
      し、見事チンパンジーに勝てるでしょうか？ぜひチャレンジしてみてください！
    </p>
  </>
)

export default Intro

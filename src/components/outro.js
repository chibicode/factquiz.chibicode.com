/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import Emoji from './emoji'

export const submitButtonCss = css`
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  background-color: #3c79c3;
  border-color: #333;
  color: #fff;
  border-radius: 0.25rem;

  &:hover {
    background-color: #074da2;
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #333;
    outline: none;
  }
`

const SubmitButton = ({children, onClick}) => (
  <button type="button" css={submitButtonCss} onClick={onClick}>
    {children}
  </button>
)

const Outro = ({submit}) => (
  <>
    <p
      css={css`
        margin-bottom: 0;
      `}
    >
      全12問、お疲れ様です！果たしてチンパンジーに勝てたでしょうか？チェックしてみましょう。
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 2.75rem;
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
      <SubmitButton onClick={submit}>何問正解したかチェック！</SubmitButton>
    </p>
  </>
)

export default Outro

/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Emoji from './emoji'
import JapanEmoji from './twemoji/1f1ef-1f1f5'
import ExternalLink from './external-link'
import {submitButtonCss} from './outro'
import ThinkEmoji from './twemoji/1f914'
import MonkeyEmoji from './twemoji/1f435'

const JpC2A = () => (
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
        <JapanEmoji />
      </Emoji>{' '}
      日本版も作りました！名付けて「ニホンザルクイズ」{' '}
      <Emoji large>
        <JapanEmoji />
      </Emoji>
    </h3>
    <p>
      (2019/1/30追記) 新しく日本の事実にまつわるクイズを作りました。その名も「
      <strong>ニホンザルクイズ</strong>」。ぜひチャレンジしてみてください。
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 2.75rem;
        margin-bottom: 1rem;
      `}
    >
      <Emoji>
        <JapanEmoji />
      </Emoji>{' '}
      <Emoji>
        <ThinkEmoji />
      </Emoji>{' '}
      <Emoji>
        <MonkeyEmoji />
      </Emoji>{' '}
      <Emoji>
        <JapanEmoji />
      </Emoji>
    </div>
    <p>
      <ExternalLink
        href="https://factfulness-jp.chibicode.com"
        css={submitButtonCss}
      >
        ニホンザルクイズに挑戦
      </ExternalLink>
    </p>
  </>
)

export default JpC2A

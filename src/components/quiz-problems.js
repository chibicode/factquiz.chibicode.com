/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems} from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import ChoiceButton from './choice-button'

const QuizProblems = () => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(({text, choices, useGraphic, answer}, index) => (
      <Card key={text}>
        <h3
          css={css`
            margin-top: 0;
            font-size: 1rem;
            margin-bottom: 1rem;
          `}
        >
          <span
            css={css`
              color: #999;
            `}
          >
            質問{index + 1}:
          </span>{' '}
          {text}
        </h3>
        {useGraphic ? (
          <></>
        ) : (
          <>
            <ChoiceButton>{choices.a}</ChoiceButton>
            <ChoiceButton isSelected>{choices.b}</ChoiceButton>
            <ChoiceButton>{choices.c}</ChoiceButton>
          </>
        )}
        {index === 0 && (
          <p
            css={css`
              color: #999;
              font-size: 0.85rem;
            `}
          >
            正しいと思う答えを選んでみてください。最後にある「
            <strong>何問正解したかチェック！</strong>
            」ボタンを押すまで何度でも選び直すことができます。
          </p>
        )}
      </Card>
    ))}
  </>
)

export default QuizProblems

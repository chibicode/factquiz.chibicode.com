/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems} from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import ChoiceButton from './choice-button'

const mapCss = css`
  height: 180px;
  border-radius: 0.25rem;
  margin-left: auto;
  margin-right: auto;
`

const QuizProblems = ({setAnswer, selectedAnswers}) => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(
      ({text, choices, useGraphic}, index) =>
        selectedAnswers.length >= index && (
          <Card
            key={text}
            isLast={
              selectedAnswers.length === index ||
              (selectedAnswers.length === 12 && index === 11)
            }
          >
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
            <>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'a'}
                onClick={setAnswer({index, answer: 'a'})}
              >
                {useGraphic ? (
                  <img
                    src="/static/images/map-a.png"
                    alt="Map A"
                    css={mapCss}
                  />
                ) : (
                  choices.a
                )}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'b'}
                onClick={setAnswer({index, answer: 'b'})}
              >
                {useGraphic ? (
                  <img
                    src="/static/images/map-b.png"
                    alt="Map B"
                    css={mapCss}
                  />
                ) : (
                  choices.b
                )}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'c'}
                onClick={setAnswer({index, answer: 'c'})}
              >
                {useGraphic ? (
                  <img
                    src="/static/images/map-c.png"
                    alt="Map C"
                    css={mapCss}
                  />
                ) : (
                  choices.c
                )}
              </ChoiceButton>
            </>
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
        )
    )}
  </>
)

export default QuizProblems

/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems} from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import QuizResultChoice from './quiz-result-choice'

const QuizResults = ({selectedAnswers}) => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(({text, choices, useGraphic, answer}, index) => (
      <Card
        key={text}
        backgroundColor={
          answer === selectedAnswers[index] ? '#F4F6FB' : '#FEF1F3'
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
              color: #777;
            `}
          >
            質問{index + 1}:
          </span>{' '}
          {text}
        </h3>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <QuizResultChoice
            choice="a"
            useGraphic={useGraphic}
            choices={choices}
            selectedAnswer={selectedAnswers[index]}
            correctAnswer={answer}
          />
          <QuizResultChoice
            choice="b"
            useGraphic={useGraphic}
            choices={choices}
            selectedAnswer={selectedAnswers[index]}
            correctAnswer={answer}
          />
          <QuizResultChoice
            choice="c"
            useGraphic={useGraphic}
            choices={choices}
            selectedAnswer={selectedAnswers[index]}
            correctAnswer={answer}
          />
        </div>
      </Card>
    ))}
  </>
)

export default QuizResults

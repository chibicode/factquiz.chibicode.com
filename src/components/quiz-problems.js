/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {problems} from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import Outro from './outro'
import Map from './map'
import ChoiceButton from './choice-button'

const quietCss = css`
  color: #777;
  font-size: 0.85rem;
`

const QuizProblems = ({setAnswer, selectedAnswers, submit}) => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(
      ({text, choices, useGraphic}, index) =>
        selectedAnswers.length >= index && (
          <Card key={text} isLast={selectedAnswers.length === index}>
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
            <>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'a'}
                onClick={setAnswer({index, answer: 'a'})}
              >
                {useGraphic ? <Map choice="a" /> : choices.a}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'b'}
                onClick={setAnswer({index, answer: 'b'})}
              >
                {useGraphic ? <Map choice="b" /> : choices.b}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'c'}
                onClick={setAnswer({index, answer: 'c'})}
              >
                {useGraphic ? <Map choice="c" /> : choices.c}
              </ChoiceButton>
            </>
            {index === 0 && (
              <>
                <p css={quietCss}>
                  正しいと思う答えを選んでみてください。最後にある「
                  <strong>何問正解したかチェック！</strong>
                  」ボタンを押すまで何度でも選び直すことができます。
                </p>
                <p css={quietCss}>
                  このクイズについて詳しくは
                  <a
                    href="https://github.com/chibicode/factquiz.chibicode.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    こちら
                  </a>
                  。
                </p>
              </>
            )}
            {index === 11 && (
              <>
                <p css={quietCss}>
                  『ファクトフルネス』の本にはこの次に13問目がありますが、ほとんどの人が正解するボーナス問題なので省いています。つまり、これが最終問題です！
                </p>
              </>
            )}
          </Card>
        )
    )}
    {selectedAnswers.length === 12 && (
      <Card isLast>
        <Outro submit={submit} />
      </Card>
    )}
  </>
)

export default QuizProblems

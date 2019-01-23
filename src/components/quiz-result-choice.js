/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Map from './map'
import Emoji from './emoji'
import CircleEmoji from './twemoji/2b55'
import CrossEmoji from './twemoji/274c'

const QuizResultChoice = ({
  useGraphic,
  choice,
  choices,
  selectedAnswer,
  correctAnswer
}) => (
  <p
    css={css`
      margin-bottom: 0.5rem;
    `}
  >
    {useGraphic ? (
      <Map
        choice={choice}
        isSelected={selectedAnswer === choice}
        isSemiTransparent={selectedAnswer !== choice}
      />
    ) : (
      <>
        <span
          css={css`
            margin-right: 0.25em;
          `}
        >
          {selectedAnswer === choice ? (
            selectedAnswer === correctAnswer ? (
              <Emoji>
                <CircleEmoji />
              </Emoji>
            ) : (
              <Emoji>
                <CrossEmoji />
              </Emoji>
            )
          ) : (
            <span
              css={css`
                display: inline-block;
                width: 1em;
              `}
            />
          )}
        </span>
        {selectedAnswer === choice ? (
          <span
            css={css`
              font-weight: bold;
            `}
          >
            {choices[choice]}
          </span>
        ) : (
          <span
            css={css`
              color: #777;
            `}
          >
            {choices[choice]}
          </span>
        )}
      </>
    )}
  </p>
)

export default QuizResultChoice

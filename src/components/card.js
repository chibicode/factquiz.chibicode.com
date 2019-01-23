/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Card = ({children, isLast, backgroundColor}) => (
  <>
    <section
      css={css`
        background: ${backgroundColor};
        border-radius: 0.5rem;
        padding: 2rem 1rem 1rem;
        ${ns} {
          padding: 2rem 2rem 1rem;
        }
      `}
    >
      {children}
    </section>
    {!isLast && (
      <div
        css={css`
          width: 1.25rem;
          height: 2rem;
          margin: 0 auto;
          background: #c7bfa7;
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  isLast: false,
  backgroundColor: '#fff'
}

export default Card

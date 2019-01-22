/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Card = ({children, isLast}) => (
  <>
    <section
      css={css`
        background: #fff;
        border-radius: 0.5rem;
        padding: 2rem 1rem 1.5rem;
        ${ns} {
          padding: 2rem 2rem 1.5rem;
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
  isLast: false
}

export default Card

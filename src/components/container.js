/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Container = ({children}) => (
  <main
    css={css`
      max-width: 700px;
      padding: 1rem 0.5rem 3rem;
      ${ns} {
        padding: 3rem 0.5rem 3rem;
      }

      margin: 0 auto;
    `}
  >
    {children}
  </main>
)

export default Container

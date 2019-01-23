/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Emoji = ({children}) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: middle;
      height: 1em;
      transform: translateY(-0.1em);
    `}
  >
    {children}
  </span>
)

export default Emoji

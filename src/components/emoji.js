/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Emoji = ({children, large}) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: middle;
      height: ${large ? '1.5em' : '1em'};
      transform: translateY(-0.1em);
    `}
  >
    {children}
  </span>
)

export default Emoji

/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import AmazonLink from './amazon-link'

const Book = () => (
  <AmazonLink
    css={css`
      font-size: 0;
    `}
  >
    <img
      src="/static/images/cover-obi.jpg"
      alt="FACTFULNESS ファクトフルネス"
      css={css`
        display: inline-block;
        max-width: 180px;
        border: 1px solid #c7bfa7;
      `}
    />
  </AmazonLink>
)

export default Book

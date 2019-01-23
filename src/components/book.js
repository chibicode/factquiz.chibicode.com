/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import AmazonLink from './amazon-link'

const Book = () => (
  <AmazonLink>
    <img
      src="/static/images/cover-obi.jpg"
      alt="FACTFULNESS ファクトフルネス"
      css={css`
        max-width: 180px;
        margin: 0 auto;
        border: 1px solid #c7bfa7;
      `}
    />
  </AmazonLink>
)

export default Book

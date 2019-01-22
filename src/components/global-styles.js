/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import 'modern-normalize'

const NOT_SMALL = '48em'
export const ns = `@media screen and (min-width: ${NOT_SMALL})`

const GlobalStyles = () => (
  <Global
    styles={[
      css`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
            'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
            sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        strong {
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
            'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
            sans-serif;
          font-weight: bold;
        }

        html {
          font-size: 18px;
          color: #333;
          line-height: 1.8;
          background-color: #efe5c8;
        }

        svg {
          height: 100%;
          width: auto;
        }

        ${ns} {
          html {
            font-size: 21px;
          }
        }

        p {
          margin: 0 0 1rem;
        }

        a {
          color: inherit;
          &:hover {
            background-color: #bbdefb;
          }
        }
      `
    ]}
  />
)

export default GlobalStyles

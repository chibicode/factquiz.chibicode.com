/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const mapCss = css`
  height: 180px;
  border-radius: 0.25rem;
  margin-left: auto;
  margin-right: auto;
`

const Map = ({choice, isSelected, isSemiTransparent}) => (
  <img
    src={`/static/images/map-${choice}${isSelected ? '-answer' : ''}.png`}
    alt={`Map ${choice}`}
    css={[
      mapCss,
      isSemiTransparent &&
        css`
          opacity: 0.5;
        `
    ]}
  />
)

export default Map

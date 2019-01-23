/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const ChoiceButton = ({children, isSelected, onClick}) => (
  <button
    type="button"
    css={css`
      border-width: 2px;
      border-style: solid;
      cursor: pointer;
      width: 100%;
      display: block;
      margin-bottom: 1rem;
      padding: 0.75rem 1rem;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      font-weight: ${isSelected ? 'bold' : 'normal'};
      background-color: ${isSelected ? '#ECF3FD' : '#fff'};
      color: ${isSelected ? '#074da2' : '#777'};
      border-color: ${isSelected ? '#074da2' : '#ccc'};
      border-radius: 0.25rem;

      &:hover {
        border-color: #074da2;
        color: #074da2;
      }

      &:focus {
        box-shadow: inset 0 0 0 1px #074da2;
        outline: none;
      }
    `}
    onClick={onClick}
  >
    {children}
  </button>
)

export default ChoiceButton

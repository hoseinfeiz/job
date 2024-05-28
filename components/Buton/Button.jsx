/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
export default function Button({ type = 'medium', children, submitHandler }) {
  const theme = useTheme()
  let btnWidth
  if (type === 'small') {
    btnWidth = 80
  } else if (type === 'medium') {
    btnWidth = 100
  } else if (type === 'large') {
    btnWidth = 120
  }
  return (
    <button
      onClick={submitHandler}
      type="submit"
      css={css`
        width: ${btnWidth}px;
        background-color: transparent;
        color: #154c79;
        border: 1px solid #154c79;
        border-radius: 3px;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.5s ease-out;
        &:hover {
          background-color: #09bda2;
        }
      `}
    >
      {children}
    </button>
  )
}

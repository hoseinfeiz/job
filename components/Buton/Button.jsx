/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
export default function Button({ type, children, submitHandler }) {
  const theme = useTheme()
  let backColor = ''
  let btnColor = ''
  if (type === 'danger') {
    backColor = 'red'
    btnColor = 'white'
  } else if (type === 'success') {
    backColor = 'green'
    btnColor = 'white'
  }
  return (
    <button
      onClick={submitHandler}
      type="submit"
      css={css`
        width: 100%;
        background-color: ${backColor};
        color: ${btnColor};
        border: 1px solid #eee;
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

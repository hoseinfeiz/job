/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      css={css`
        width: 100%;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 10px;
        box-sizing: border-box;
      `}
    />
  )
}

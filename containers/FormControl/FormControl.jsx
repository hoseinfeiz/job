/** @jsxImportSource @emotion/react */
import theme from '@/configs/theme'
import { css } from '@emotion/react'

export default function FormControl({ children }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding: ${theme.spaces[3]} 0;
      `}
    >
      {children}
    </div>
  )
}

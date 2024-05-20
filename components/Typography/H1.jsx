/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

export default function H1({ children }) {
  const theme = useTheme()
  return (
    <h1
      css={css`
        font-size: ${theme.typography.h1.fontSize}em;
        font-weight: ${theme.typography.h1.fontWeight};
        line-height: ${theme.typography.h1.lineHeight};
        width: 100%;
      `}
    >
      {children}
    </h1>
  )
}

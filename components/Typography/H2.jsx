/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

export default function H2({ children, align = 'center' }) {
  const theme = useTheme()
  return (
    <h2
      css={css`
        font-size: ${theme.typography.h2.fontSize}em;
        font-weight: ${theme.typography.h2.fontWeight};
        line-height: ${theme.typography.h2.lineHeight};
        width: 100%;
        text-align: ${align};
      `}
    >
      {children}
    </h2>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
export default function HyperLink({ children }) {
  return (
    <Link
      css={css`
        text-decoration: none;
        border-bottom: 1px solid red;
      `}
      href="/login"
    >
      {children}
    </Link>
  )
}

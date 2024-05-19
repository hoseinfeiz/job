/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Input } from '..'
export default function InputPassword({ placeholder }) {
  return (
    <Input
      type="password"
      placeholder={placeholder}
      css={css`
        direction: ltr;
      `}
    />
  )
}

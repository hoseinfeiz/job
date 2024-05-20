/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Input } from '..'
export default function InputPassword({ placeholder }) {
  return (
    <Input
      type="password"
      placeholder={placeholder}
      direction="ltr"
      css={css`
        direction: ltr;
      `}
    />
  )
}

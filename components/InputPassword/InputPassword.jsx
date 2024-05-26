/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Input } from '..'
export default function InputPassword(props) {
  return (
    <Input
      {...props}
      type="password"
      direction="ltr"
      css={css`
        direction: ltr;
      `}
    />
  )
}

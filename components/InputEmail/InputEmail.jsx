/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

export default function InputEmail({ placeholder }) {
  return (
    <Input
      type="email"
      placeholder={placeholder}
      css={css`
        direction: ltr;
      `}
    />
  )
}

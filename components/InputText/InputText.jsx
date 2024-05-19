/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

export default function InputText({ placeholder }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      css={css`
        direction: ltr;
      `}
    />
  )
}

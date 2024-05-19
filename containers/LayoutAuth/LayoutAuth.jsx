/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function LayoutAuth({ children }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 700px;
        min-width: 300px;
        heigt: 100vh;
        margin: 20px auto;
      `}
    >
      <div
        css={css`
          width: 200px;
        `}
      >
        <img
          css={css`
            width: 100%;
          `}
          src="images/logo.png"
        />
      </div>
      <h2>لطفا لاگین کنید</h2>
      {children}
    </div>
  )
}

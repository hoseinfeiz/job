/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@/components'
import { useRouter } from 'next/router'
import { H2 } from '@/components'
import { Space } from '@/components'
import { useSelector } from 'react-redux'
import React from 'react'
export default function LayoutHomeBanner({ children }) {
  const auth = useSelector((state) => state.auth)
  console.log('authhh', auth)
  const router = useRouter()
  const loginHandler = () => {
    router.push('/login')
  }

  const registerHandler = () => {
    router.push('/register')
  }

  return (
    <div
      css={css`
        width: 100%;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 860px;
          min-width: 300px;
          height: 100%;
          margin: 10px auto;
        `}
      >
        <div
          css={css`
            height: 100px;
          `}
        >
          <img
            css={css`
              height: 100px;
            `}
            src="images/logoo.png"
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            width: 30%;
          `}
        >
          <Button submitHandler={loginHandler} width="50" type="small">
            ورود
          </Button>
          <Button submitHandler={registerHandler} width="50" type="small">
            ثبت نام
          </Button>
        </div>
      </div>
      <div>
        <H2>ما ریموت کار می کنیم</H2>
        <Space />
        <p
          css={css`
            padding: 20px;
          `}
        >
          سایت ریموت جاب این امکان را برای شما فراهم می کند که با تعداد زیادی از
          مخاطبان خود برای تبلیغ کار از راه دور خور در ارتباط باشید
        </p>
      </div>
    </div>
  )
}

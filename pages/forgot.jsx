/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import Head from 'next/head'
import LayoutAuth from '@/containers/LayoutAuth/LayoutAuth'
import FormControl from '@/containers/FormControl/FormControl'
import {
  InputText,
  InputPassword,
  Button,
  InputEmail,
  H1,
  H2,
  Space,
  HyperLink,
} from '@/components'

export default function Forgot() {
  const [formValue, setFormvalue] = useState({})
  const SubmitHandler = (event) => {
    event.preventDefault()
    console.log('form values', formValue)
  }
  const ChangeHandle = (name, value) => {
    setFormvalue({
      ...formValue,
      [name]: value,
    })
  }
  return (
    <>
      <Head>
        <title>Forgot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <>
          <Space />
          <H2 align="center"> فراموشی رمز</H2>
          <form
            css={css`
              width: 70%;
            `}
          >
            <FormControl>
              <InputEmail
                placeholder="email"
                changeHandle={(val) => ChangeHandle('email', val)}
              />
            </FormControl>

            <FormControl>
              <Button submitHandler={SubmitHandler} type="success">
                Send
              </Button>
            </FormControl>
            <HyperLink>وارد شوید</HyperLink>
          </form>
        </>
      </LayoutAuth>
    </>
  )
}

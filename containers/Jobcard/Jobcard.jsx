/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { H2 } from '@/components'
export default function Jobcard({ jobItem }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 860px;
        min-width: 300px;
        margin: 5px auto;
        background-color: #eee;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 60%;
          padding: 10px;
        `}
      >
        <H2>{jobItem.jobCompanyName}</H2>
        <div>{jobItem.jobTitle}</div>
        <div>{jobItem.jobType}</div>
      </div>
      <div
        css={css`
          width: 40%;
        `}
      >
        {jobItem.jobDateStart}
      </div>
    </div>
  )
}

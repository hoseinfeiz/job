/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Jobcard from '../Jobcard/Jobcard'
import { H1 } from '@/components'
export default function JobcardList({ jobList }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 860px;
        min-width: 300px;
        margin: 20px auto;
      `}
    >
      <>
        <H1>لیست شغل ها</H1>
        {jobList.map((job, index) => (
          <Jobcard key={index} jobItem={job} />
        ))}
      </>
    </div>
  )
}

import { useParams } from 'react-router-dom'

export default function IdoDetail(xxx) {
  const params = useParams()
  console.log('params', params)
  return (
    <>
      <div>IdoDetail {params?.id}</div>
    </>
  )
}

import {useState, useCallback} from 'react'
import {post} from '../../server'
import * as D from '../../data'
import {Button} from '../../theme/daisyui'
import { useAuth } from '../../contexts'

export default function PostTest() {
  const {jwt} = useAuth()

  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const postTest = useCallback(() => {
    post('/test', D.makeRandomCard(), jwt)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }, [jwt])

  return (
    <section className="mt-4">
      <div className="flex justify-center mb-4">
        <Button onClick={postTest} className="btn-primary">
          POST
        </Button>
      </div>
      <div className="mt-4 text-center">
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </section>
  )
}

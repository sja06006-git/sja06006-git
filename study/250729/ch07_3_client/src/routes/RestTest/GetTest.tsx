import { useState, useEffect } from "react"
import { json } from "stream/consumers"

export default function GetTest() {
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:4000/test')
    .then(res => res.json)
    .then(data => setData(data))
    .catch(error => setErrorMessage(error.message))
  })
  return (
    <div>
      <p className="text-2xl text-center text-bold">GetTset</p>
      <div>
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}

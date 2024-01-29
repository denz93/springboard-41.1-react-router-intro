import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import "./Snack.css"
import { useMemo } from 'react'
import { useEffect } from 'react'

export default function Snack() {
  const snack = useLoaderData()
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(0)
  }, [snack])
  const imageListEles = useMemo(() => {
    return new Array(count).fill(1).map((_, idx) => <img key={idx} src={snack.url} alt={snack.name}/>)
  }, [count, snack])
  return <div className='snack'>
    <h1>{snack.name}</h1>
    <button onClick={() => setCount(count + 1)}>Get it</button>
    <p>{count}</p>
    <div className='image-list'>
      {imageListEles}
    </div>
  </div>
}
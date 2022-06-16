import { useState, useEffect  } from "react"

export default function App() {
  const [img, setImg] = useState()
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r=>r.json())
    .then(({ message })=>setImg(message))
  }, [])

  if (!img) return <p>Loading...</p>

  return <img src={img} alt='A Random Dog' />
}
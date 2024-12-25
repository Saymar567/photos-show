import { useEffect, useState } from 'react'
import "../styles/photos.css"

const API_URL = `https://picsum.photos/v2/list?page=5&limit=100`;
const Photos=()=> {
  const [cards, setCards] = useState([])
  const [index, setIndex] = useState(0);

  useEffect(()=>{
fetch(API_URL)
.then((response)=> response.json())
.then((data)=> setCards(data))
.catch((error)=> console.log(error, "Error getting images"))
  }, [])

  const loadMoreImages = ()=>{
    setIndex((prevIndex)=>prevIndex + 9);
  }
  return (

<>
<div>
        <h1>Photos</h1>
        <h2>By Mikel Jiménez</h2>
      </div>
      <div>
        <button className='button' onClick={loadMoreImages}>
          Get more images
        </button>
      </div>
      <div className='card-container'>
      {
        cards.slice(0, index+9).map((card)=>(
          <div key={card.id} className='card'>
            <h3> {card.id} </h3>
            <img src={card.download_url} alt={`Photo taken by ${card.author}`} />
            <h2> {card.author} </h2>
          </div>
        ))

      }
      </div>
    </>
  )
}
export default Photos
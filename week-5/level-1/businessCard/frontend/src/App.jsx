import { useState } from 'react'
import { BusinessCard } from './components/BusinessCard'

function App() {

  let cardDetails = {
    name: 'Sri Vigneshwar',
    description: 'Developer',
    interestHeader: 'Software Development',
    interests:[ 'Javascript', 'React', 'Node js' ],
    twitter: 'https://twitter.com/sriviki2416',
    linkedin: 'https://www.linkedin.com/in/sri-vigneshwar-s-5bb01a17b/'
  };


  const [card, setCard] = useState(cardDetails); 

  console.log(card);

  return (
    <>
      <BusinessCard props={card}></BusinessCard>
    </>
  )
}

export default App

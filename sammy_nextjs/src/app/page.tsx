
//its a component with logic in function , re usuable UI element,they should start with capital letter
// one componen per file
// props - properties
// props are read only
// props are immutable
// props are used to pass data from parent to child
'use client'
import React from 'react'

interface CardProps {
  // text: string;
  children: React.ReactNode;
}
function Card({children}: CardProps){

  return(
    <div className="bg-black text-amber-300 p-4 shadow-md rounded-md m-4">
      {children}
    </div>
  )
}


export default function Home() {
  const [isVisible, setIsVisible] = React.useState(true)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    console.log(e)

    setIsVisible(!isVisible)
  } 
  const cards = isVisible && <div>
  <Card><div className="border-2 border-amber-50">THIS IS A CARD
    <Card><div className=" text-blue-600 border-2 border-amber-600 ">This is Nested</div></Card></div>
  </Card>
  <Card>THIS IS JS!</Card>
  <Card>Default Content</Card>
{/* <ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul> */}
</div>
  const name = "Sammy"
  return (
    <>
    <div className="bg-amber-300 text-black p-20">
      <div>Hello, {name}</div>
      {cards}
    
    <button className="text-blue-600 hover:text-amber-300" onClick={handleClick}>
    {isVisible ? "Hide" : "Show"}
    </button>

    </div>
    </>
  )
}

import React from "react"
import Joke from "./components/Joke"

export default function App() {

  return (
    <div>
     <Joke setup="lol" punchline="punch me in the face" upVotes={10}/>
     <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."  upVotes={64}/>
     <Joke setup="Why do bees stay in the hive in the winter?" punchline="Swarm.."  upVotes={340}/>
      <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!"  upVotes={1}/>
    </div>

    
      
  )
}



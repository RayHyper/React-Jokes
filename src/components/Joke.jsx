import React from "react";


const Joke = (props)=>{


    return(
        <div>
         <h1>Joke</h1>
         <p>{props.setup}</p>
         <p>{props.punchline}</p>
         <p>upvotes:{props.upVotes}</p>
         </div>
    )
}

export default Joke;
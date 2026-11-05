import { useState } from "react"


export default function UserInput(){

    const [username, setUsername] = useState(0)

    return(
        <div className="userinput">
            
            <input type="number" 
                   value={username}
                   onChange={(event) => setUsername(event.target.value)}
            />


            <h1>Username: {username} </h1>
        </div>
    )
}
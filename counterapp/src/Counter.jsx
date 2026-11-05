import { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0)

    function Increase(){
        setCount(count + 2)
    }

    function Decrease(){
        setCount(count - 5)
    }

    function Reset(){
        setCount(count * 0)
    }

    return(
        <div className="counter_container">
            <h1>{count}</h1>

            <div className="btn">
                <button onClick={Increase}>Increase by 1</button>
                <button onClick={Decrease}>Decrease by 1</button>
                <button onClick={Reset}>Reset to Zero</button>
                
                <button onClick={function Multiply(){
                            setCount(count * 2)
                            }}>Multiply by 2
                </button>
            </div>
            
        </div>
    )

}




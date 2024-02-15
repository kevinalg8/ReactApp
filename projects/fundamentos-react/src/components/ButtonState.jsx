import { useState } from "react"

const ButtonState = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>Button State: {count}</button>
    )

}
export default ButtonState
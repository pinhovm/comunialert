import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    )
}

export default MyButton;
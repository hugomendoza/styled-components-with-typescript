import { useState } from "react"
import { Button } from "./components/Button"

function App() {

  const [counter, setCounter] = useState(0)


  return (
    <>
      <h1>{counter}</h1>
      <Button variant="outline" onPress={() => setCounter(counter + 1)} />
    </>
  )
}

export default App

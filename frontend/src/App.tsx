
import Button from "./components/Button"

const App = (): React.ReactNode => {

  return (
    <div>
      Text Monolith frontend

      <Button label="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  )
}
export default App

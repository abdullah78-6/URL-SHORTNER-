import Signup from "./components/Signup"
function App() {
  const backendemail="http://localhost:9000"
  return <div>
    <Signup url={backendemail}/>
  </div>


}

export default App

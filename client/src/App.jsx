import { useSelector } from "react-redux"
import Signup from "./components/Signup"
import {Route,Routes,Navigate} from "react-router-dom"
import Url from "./components/Url";

function App() {
  const backendeurl="http://localhost:9000"
  const backendemail=useSelector(state=>state.main.backendemail);
  return <div>
   <Url url={backendeurl}/> 
    <Routes>
      <Route path="/register" element={!backendemail?<Signup url={backendeurl}/>:<Navigate to="/"/>}/>
      
    </Routes>
  </div>


}

export default App

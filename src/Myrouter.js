import {BrowserRouter,Routes , Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "./Navbar"
import Pagenotfound from "./Pagenotfound"
function MyRouter(){
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/*" element={<Pagenotfound />}></Route>
            </Routes>
            </BrowserRouter>
        </div>   
         )
}

export default MyRouter
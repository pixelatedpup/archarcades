import Home from "./pages/Home"
import Games from "./pages/Games"
import Events from "./pages/Events"
import Scoreboards from "./pages/Scoreboards"
import {Routes, Route} from 'react-router-dom'


const Body = () =>{
    return(
    <>
    <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/games" element={<Games/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/scoreboards" element={<Scoreboards/>} />
        </Routes>
    </main>
       
    </>
    );
}

export default Body;
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const NavGraph = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/"
            index element={<Home/>}/>
            <Route path="/about"
            element={<About/>}/>
            <Route path="/contact"
            element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}
export default NavGraph;
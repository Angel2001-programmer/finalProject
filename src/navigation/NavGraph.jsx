import Home from '../pages/home/home';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Error from '../pages/error/error';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const NavGraph = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/home"
            element={<Home/>}/>
            <Route path="/finalProject"
            element={<About/>}/>
            <Route path="/contact"
            element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}
export default NavGraph;
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Error from '../pages/error/error';
import EditAccount from '../pages/editAccount/editAccount';
import Forums from '../pages/forum/forum';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const NavGraph = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/finalProject" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/editAccount" element={<EditAccount/>}/>
            <Route path="/forums" element={<Forums/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}
export default NavGraph;
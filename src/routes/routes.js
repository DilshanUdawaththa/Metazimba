import React from 'react';
import HomePage from '../pages/homepage';
import AboutUsPage from '../pages/aboutUs';
import ContactUsPage from '../pages/contactUs';
import ServicesPage from '../pages/services';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


const MyRoutes = () => {
    return(
        <React.Fragment>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about_us" element={<AboutUsPage/>}/>
                <Route path="contact_us" element={<ContactUsPage/>}/>
                <Route path="services" element={<ServicesPage/>}/>
            </Routes>        
         </BrowserRouter>
        </React.Fragment>
    );  
}

export default MyRoutes;
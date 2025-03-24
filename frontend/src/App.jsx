// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddClientForm from './components/AddClientForm';
import ClientsList from './components/ClientsList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Job from './components/job';
import BackToTop from './components/BackToTop';
const App = () => {
    return (
        <Router>
        <Navbar/>

            {/* <div className="container mx-auto p-4"> */}
                <Routes>
                    
                    <Route path="/" element={<AddClientForm />} />
                    <Route path="/clients" element={<ClientsList />} />
                    <Route path="/About" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
        <Route path="/jobs" element={ <Job />}/>

                </Routes>
                <BackToTop /> 
            {/* </div> */}
            <Footer/>
        </Router>
    );
};

export default App;
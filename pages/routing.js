// pages/routing.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './index'; // Home Page
import Services from './Services'; // Services Page
import Contact from './Contact'; // Contact Page

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

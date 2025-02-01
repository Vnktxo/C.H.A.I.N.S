// pages/Services.js
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl mt-10">Our Services</h1>
            <p className="text-center mt-5">We provide top-notch services to our customers.</p>
            <Footer />
        </div>
    );
};

export default Services;

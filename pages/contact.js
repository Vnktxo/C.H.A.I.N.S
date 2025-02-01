// pages/Contact.js
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl mt-10">Contact Us</h1>
            <p className="text-center mt-5">Feel free to reach out for more information.</p>
            <Footer />
        </div>
    );
};

export default Contact;

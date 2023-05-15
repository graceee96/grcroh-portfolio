import React, { useState } from "react";
import './App.css';

//import components
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

//import pages
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/portfolio/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/contact/ContactForm';

export default function App() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="content">
            <Header nav={<Nav currentPage={currentPage} handlePageChange={handlePageChange} />} />

            <div id="section" className="p-4">
                {renderPage()}
            </div>

            <Footer />
        </div>
    )
}
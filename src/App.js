import React from "react";
import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    const renderPage = () => {};
    
    return (
        <div id="content">
            <Header />

            <div id="section" className="p-4">
                {renderPage()}
            </div>

            <Footer />
        </div>
    )
}
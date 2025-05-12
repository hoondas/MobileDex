import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import Shiny from './components/Shiny';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shiny" element={<Shiny />} />
            </Routes>
        </Router>
    );
}

export default App;

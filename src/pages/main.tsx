import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from "./container/container";
import Navbar from "../components/organisms/navbar/navbar";

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Container/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;

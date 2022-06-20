//@packages
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//@scripts
import Container from "./container/container";
import Navbar from "../components/organisms/navbar/navbar";
import {EventProvider} from "../context/EventProvider";
import Payment from "../components/organisms/payment/payment";

const Main = () => {
    return (
        <EventProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Container/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                </Routes>
            </BrowserRouter>
        </EventProvider>
    );
};

export default Main;

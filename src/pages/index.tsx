import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Calls from "./calls";
import Error from "./error";
import Test from "./test";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Calls/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" replace/>}/>
        </Routes>
    );
};
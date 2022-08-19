/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Routes, Route } from 'react-router'
// Write component imports here //
import About from "./components/About"
import Home from "./components/Home"

// Start Router function here //
function Router() {
    return (
        <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/about" component={<About/>} />
        </Routes>
    );
}

export default Router;


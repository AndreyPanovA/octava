import React from "react";
import { Route, Routes, Outlet,Link} from 'react-router-dom'
import {Layout} from "../base-layouts";
import API from "../../api/api";
// Vjcrdf2022#

export default function Navigation() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />} >
                <Route path="/"  element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route  path="/dash" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}

function Home() {
    React.useEffect(()=>{
        API.get_system_info().then(el=>{
            console.log("hire", el)
        })
    })
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

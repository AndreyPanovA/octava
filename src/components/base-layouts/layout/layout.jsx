import React from "react"
import { Route, Routes, Outlet,Link} from 'react-router-dom'
import {Footer, Header} from "../index";
const Layout = ()=> {
    return (
        <>
            <Header/>
                <Outlet />
            <Footer />
        </>

    )
}
export default Layout

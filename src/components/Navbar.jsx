import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function Navbar() {

    const navlinks = ['Home', 'About', 'Login']
    const navigate = useNavigate()

    const navs = navlinks.map( (link, index) => {
        return (
            <NavLink key={index} to={'/'+link} className="text-lg text-slate-700 active:text-blue-500">{link}</NavLink>
        )
    })

    return (
        <nav className="bg-white flex h-16 items-center justify-between px-4 py-2">
            <a href="/">
            <img src="/vite.svg" alt="" />
            </a>

            <div className="space-x-4">
                {navs}
            </div>

            <div className="space-x-4">
                <button className="px-4 py-2 rounded-lg text-white uppercase bg-blue-600 hover:bg-blue-800 transition"
                    onClick={() => navigate("/login")}
                >Login</button>
                <button className="px-4 py-2 rounded-lg text-white uppercase ring-blue-600 ring hover:bg-blue-800 transition hover:ring-0"
                    onClick={() => navigate("/signup")}
                >Signup</button>
            </div>
        </nav>
    )
}
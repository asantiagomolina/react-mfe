import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { paths } from "../../router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

const Navbar = () => {
    const [collapse, setCollapse] = useState(false)

    const handleClick = () => {
        setCollapse((prev) => !prev)
    }

    return (
        <>
            <nav className="max-sm:hidden sm:flex w-full space-x-4 bg-cyan-950">
                <NavLink className="px-3 py-2 text-gray-300 hover:text-white" to={paths.ROOT}><FontAwesomeIcon icon={faHome} /></NavLink>
                <NavLink className="px-3 py-2 text-gray-300 hover:text-white" to={paths.USER_MANAGER}>User Manager</NavLink>
                <NavLink className="px-3 py-2 text-gray-300 hover:text-white" to={paths.TASK_MANAGER}>Task Manager</NavLink>
                <NavLink className="px-3 py-2 text-gray-300 hover:text-white" to={paths.REPORTS}>Reports</NavLink>
            </nav>
            <nav className="max-sm:flex max-sm:flex-col sm:hidden items-start w-full">
                <div className="bg-cyan-950 p-4 text-2xl w-full border-b border-white h-16">
                    <button onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className={cn("flex flex-col w-full bg-cyan-950 text-gray-300 hover:text-white overflow-hidden transition-all origin-top duration-300 absolute top-16", { 'transform scale-y-0': !collapse })}>
                    <NavLink className="p-4" to={paths.ROOT}>Home</NavLink>
                    <NavLink className="p-4" to={paths.USER_MANAGER}>User Manager</NavLink>
                    <NavLink className="p-4" to={paths.TASK_MANAGER}>Task Manager</NavLink>
                    <NavLink className="p-4" to={paths.REPORTS}>Reports</NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

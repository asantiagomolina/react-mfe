import React from "react"
// import { NavLink } from "react-router-dom";
// import { paths } from "../router";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="flex bg-cyan-950 text-white font-bold">
            {/* <nav className="flex space-x-4">
                <NavLink className="px-3 py-2 text-sm text-gray-300 hover:text-white" to={paths.ROOT}><FontAwesomeIcon icon={faHome} /></NavLink>
                <NavLink className="px-3 py-2 text-sm text-gray-300 hover:text-white" to={paths.USER_MANAGER}>User Manager</NavLink>
                <NavLink className="px-3 py-2 text-sm text-gray-300 hover:text-white" to={paths.TASK_MANAGER}>Task Manager</NavLink>
                <NavLink className="px-3 py-2 text-sm text-gray-300 hover:text-white" to={paths.REPORTS}>Reports</NavLink>
            </nav> */}
            Header
        </header>
    );
}

export default Header;

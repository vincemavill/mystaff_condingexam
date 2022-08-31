import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../approutes/Authentication";
export default function Login(props) {
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
        };
    }, []);
    const handleLogout = () => {
        auth.logout()
        navigate("/")
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center mx-auto">
                <div className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">mystaff.online</span>
                </div>
                <div className="w-auto px-5">
                    <ul className="flex p-4   rounded-lg  border-gray-100 flex-row space-x-8  text-sm font-medium border-0 bg-white  dark:border-gray-700">
                        <li>
                            <Link className=" bg-blue-700 rounded bg-transparent text-blue-700 px-3" to="/">
                                Login
                            </Link>
                            <Link className=" bg-blue-700 rounded bg-transparent text-blue-700 px-3" to="/register">
                                Register
                            </Link>
                            <Link className=" bg-blue-700 rounded bg-transparent text-blue-700 px-3" to="/todolist">
                                Todolist (Private)
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-auto px-5">
                    <ul className="flex p-4   rounded-lg  border-gray-100 flex-row space-x-8  text-sm font-medium border-0 bg-white  dark:border-gray-700">
                        <li>
                            {
                                auth.isAuthenticated()
                                &&
                                <div onClick={() => {
                                    handleLogout()
                                }} className=" bg-blue-700 rounded bg-transparent text-red-700 px-3 cursor-pointer">
                                    Logout
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

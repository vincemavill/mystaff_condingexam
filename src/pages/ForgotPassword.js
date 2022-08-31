import React, { useEffect, useState } from "react";
import Navbar from "./component/Nav";
import { AxiosRequest } from "../helper/AxiosRequest";
import { forgot_password_api } from "./../environment/env";
export default function Login(props) {
    const [email, inputEmail] = useState("");
    const [error_message, setErrorMessage] = useState(null);
    const [error_messages, setErrorMessages] = useState([]);
    useEffect(() => {
        return () => {
        };
    }, []);
    const handleForgetPass = () => {
        const data = {
            "email": email,
        }
        AxiosRequest("post", forgot_password_api, data).then(
            (result) => {
                if (result.status === 200 && result.data.success) {
                    setErrorMessage(result.data.message)
                    setErrorMessages(result.data.errors)
                } else {
                    setErrorMessage(result.data.message)
                    setErrorMessages(result.data.errors)
                }
            },
            (error) => {
                setErrorMessage(error.message)
                setErrorMessages(error.errors)
            }
        );
    }
    const handleError = () => {
        if (error_message) {
            if (error_messages.length > 0) {
                return error_messages.map((item, index) => {
                    return <p className="text-center text-red-900">{item}</p>
                })
            } else {
                return <p className="text-center text-red-900">{error_message}</p>
            }
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input onChange={(event) => {
                                    inputEmail(event.target.value)
                                }}
                                    value={email}
                                    id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                            </div>
                        </div>
                        {
                            handleError()
                        }
                        <div>
                            <button onClick={() => {
                                handleForgetPass()
                            }} type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

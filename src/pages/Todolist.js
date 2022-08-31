import React, { useEffect, useState } from "react";
import Navbar from "./component/Nav";
export default function Login(props) {
    const [list, setTodolist] = useState([{
        task: "biking"
    }]);
    const [name, inputName] = useState("");
    const [action, setAction] = useState(null);
    const [show_modal, setShowModal] = useState(false);
    const [update_index, setUpdateIndex] = useState(null);
    useEffect(() => {
        return () => {
        };
    }, []);
    const handleCreate = () => {
        setAction("create")
        setShowModal(true)
    }
    const handleSubmitCreate = () => {
        setTodolist([...list,
        { task: name },
        ]);
    }
    const handleUpdate = () => {
        setAction("update")
        setShowModal(true)
    }
    const handleSubmitUpdate = () => {
        const rlist = [...list];
        rlist[update_index]["task"] = name;
        setTodolist(list);
    }
    const handleDelete = (index) => {
        const rlist = [...list];
        rlist.splice(index, 1);
        setTodolist(rlist);
    }
    return (
        <div>
            <Navbar />
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">TODOLIST</h2>
                    </div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="w-[50%]">{item.task}</td>
                                            <td>
                                                <button onClick={() => {
                                                    handleUpdate()
                                                    setUpdateIndex(index)
                                                }} type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-1 px-2 text-sm font-medium text-white">
                                                    Update
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    handleDelete(index)
                                                }} type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-1 px-2 text-sm font-medium text-white">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button onClick={() => {
                        handleCreate()
                    }} type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Create
                    </button>
                </div>
            </div>
            {/* ------------------------------------? */}
            {
                show_modal
                &&
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Task Name</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">name</label>
                                        <input onChange={(event) => {
                                            inputName(event.target.value)
                                        }}
                                            value={name}
                                            name="name" type="text" required className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Task Name" />
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    {
                                        action === "create"
                                            ?
                                            <button onClick={() => {
                                                setShowModal(false)
                                                handleSubmitCreate()
                                            }} type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm">Create</button>
                                            :
                                            <button onClick={() => {
                                                setShowModal(false)
                                                handleSubmitUpdate()
                                            }} type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm">Update</button>
                                    }
                                    <button onClick={() => {
                                        setShowModal(false)
                                    }} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

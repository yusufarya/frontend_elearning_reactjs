import { useState, Fragment} from "react"
import { NavLink } from "react-router-dom" 
import { Menu, Transition } from '@headlessui/react'


import userdefault from "../../assets/img/userdefault.png"
import { AiOutlineDown } from "react-icons/ai"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Topbar() {
    
    // const [page, setPage] = useState('dashboard')
    
    // function menuClick(page) {
    //     setPage(page) 
    // } 

    return (
        <>
            <div className="topbar h-10 w-full m-2 rounded-sm border-slate-300 bg-slate-50 ">
                <div className="relative">
                    <div className="grid grid-flow-col auto-cols-max gap-2 float-right m-2">
                        <div className="relative"> 
                            <Menu as="div" className="relative inline-block text-left">

                                <Menu.Button className="rounded-sm p-2 text-gray-900 font-semibold shadow-sm hover:bg-gray-50">
                                    Your name
                                    <img src={userdefault} className="ms-5 h-5 w-auto inline" />
                                    {/* <AiOutlineDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                </Menu.Button> 

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Duplicate
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Archive
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Move
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Share
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Add to favorites
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                    </Menu.Items>
                                </Transition>
                                </Menu>
                            {/* <NavLink className="rounded-sm bg-white p-2 text-gray-900 font-semibold" to="/login" onClick={() => menuClick('login')}>Login</NavLink> */}
                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default Topbar
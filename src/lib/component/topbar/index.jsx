import { useState, Fragment, useEffect, useCallback} from "react"
import { NavLink, useNavigate } from "react-router-dom" 
import { Menu, Transition } from '@headlessui/react'
import userdefault from "../../assets/img/userdefault.png"
import Swal from "sweetalert2"; 
import axios from "axios";
import getToken from "../../../app/authorization/getToken";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Topbar() {

    const navigate = useNavigate()
    
    const loginToken = getToken()
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        if(loginToken) {
            axios.get("http://localhost:3000/api/users/current", {
                headers: {
                    Authorization : loginToken
                }
            })
              .then(response => setDataUser(response.data.data))
              .catch(error => console.error('Error fetching data:', error));
        }
    }, []);
 
    const logoutModal = () => {

        Swal.fire({
            title: 'Are you sure want to logout?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Success!', 'logout successfuly', 'success')
                sessionStorage.removeItem("loginToken");
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
            }
        })
        
    }

    return (
        <>
            <div className="topbar h-10 w-full m-2 rounded-sm border-slate-300 bg-slate-50 ">
                <div className="relative">
                    <div className="grid grid-flow-col auto-cols-max gap-2 float-right m-2">
                        <div className="relative"> 
                            <Menu as="div" className="relative inline-block text-left">

                                <Menu.Button className="rounded-sm p-0 mb-2 text-gray-900 font-semibold hover:bg-gray-50">
                                    {dataUser.name}
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
                                            <NavLink
                                            to="/profile"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Profile
                                            </NavLink>
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
                                            Setting
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
                                            onClick={() => logoutModal()}
                                            >
                                            logout
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
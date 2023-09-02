import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { apiRequestFailure, apiRequestStart, apiRequestSuccess } from "../redux/actions/userSlice.js"
import { getLastIdentityNumber, registerUser } from "../controller/User-controller.jsx"
import Swal from "sweetalert2"

function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const [notifError, setNotifError] = useState(false)

    const [data, setData] = useState(
        { firstName: '', lastName: '', gender: '', telp: '', religion: '', place_of_birth: '', date_of_birth: '', email: '', password: '', roleId: '1', status: '1' }
    )

    function handleInput(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }    
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const getLastIdNumber = await getLastIdentityNumber(1);
        console.log(getLastIdNumber)
        if(getLastIdNumber) {
            setData({ ...data, "identity_number": getLastIdNumber })
            console.log(data)
            // dispatch(apiRequestStart());
            // dispatch(apiRequestSuccess(data));
            // const request = apiRequestSuccess(data)
            const registration = await registerUser(data);
            console.log(registration)
            if (registration.status == "success") {
                console.log(registration)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                    
                Toast.fire({
                    icon: 'success',
                    title: 'Registration is successfully'
                })
                setTimeout(() => {
                    alert('p')    
                    navigate('/login')
                }, 3000);
            } else {
                setNotifError(registration.error)
            }
        } 
        setTimeout(() => {
            setNotifError(false)
        }, 3000);
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    
                    <h2 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 drop-shadow-md">
                        Register User
                    </h2>
                </div>

                <div className="mt-10 w-12/12 sm:mx-auto sm:w-full lg:max-w-xl md:max-w-lg sm:max-w-sm px-5 py-5 shadow-lg rounded-md">
                    <form className="space-y-2 mx-0" onSubmit={handleSubmit}>

                        {
                            notifError  ? 
                            <div className="bg-red-400 text-white rounded-sm p-2 w-full flex">{notifError}</div>
                            :
                            ''
                        }
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-5 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input value={data.firstName} onChange={(e) => handleInput(e)}
                                        id="firstName" name="firstName"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-5 text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input value={data.lastName} onChange={(e) => handleInput(e)}
                                        id="lastName" name="lastName"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 w-12/12">
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium leading-5 text-gray-900">
                                    Gender
                                </label>
                                <div className="mt-2">
                                    <select value={data.gender} onChange={(e) => handleInput(e)}
                                        name="gender" id="gender"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5">
                                        <option value="">-- Select --</option>
                                        <option value="M">Male</option>
                                        <option value="L">Famale</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="telp" className="block text-sm font-medium leading-5 text-gray-900">
                                    Telp
                                </label>
                                <div className="mt-2">
                                    <input value={data.telp} onChange={(e) => handleInput(e)}
                                        id="telp" name="telp"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 w-12/12">
                            <div>
                                <label htmlFor="place_of_birth" className="block text-sm font-medium leading-5 text-gray-900">
                                    Place of birth
                                </label>
                                <div className="mt-2">
                                    < input value={data.place_of_birth} onChange={(e) => handleInput(e)}
                                        id="place_of_birth" name="place_of_birth"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="date_of_birth" className="block text-sm font-medium leading-5 text-gray-900">
                                    Date of birth
                                </label>
                                <div className="mt-2">
                                    <input value={data.date_of_birth} onChange={(e) => handleInput(e)}
                                        id='date_of_birth'
                                        name='date_of_birth'
                                        type="date"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="religion" className="block text-sm font-medium leading-5 text-gray-900">
                                Religion
                            </label>
                            <div className="mt-2">
                                <input value={data.religion} onChange={(e) => handleInput(e)}
                                    id="religion" name="religion"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input value={data.email} onChange={(e) => handleInput(e)}
                                    id="email" name="email"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input value={data.password} onChange={(e) => handleInput(e)}
                                    id="password" name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Have an account?{' '}
                        <NavLink to="/login" className="font-semibold leading-5 text-indigo-600 hover:text-indigo-500">
                            Login here
                        </NavLink>
                    </p>
                </div >
            </div >
        </>
    )
}

export default Register
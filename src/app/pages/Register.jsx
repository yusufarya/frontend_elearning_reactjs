import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../redux/actions/registerSlice.js"

function Register() {

    const dispatch = useDispatch()

    const [data, setData] = useState(
        { firstName: '', lastName: '', gender: '', telp: '', religion: '', place_of_birth: '', date_of_birth: '', email: '', password: '', roleId: '1', status: '1' }
    )

    function handleInput(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data)
        dispatch(registerUser(data))
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Register User
                    </h2>
                </div>

                <div className="mt-10 w-12/12 sm:mx-auto sm:w-full lg:max-w-lg md:max-w-md sm:max-w-sm">
                    <form className="space-y-2 mx-0" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-2 gap-3 w-12/12">
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
                            Login heere
                        </NavLink>
                    </p>
                </div >
            </div >
        </>
    )
}

export default Register
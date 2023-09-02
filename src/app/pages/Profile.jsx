import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import isLogin from "../authorization/cek-login";
import getToken from "../authorization/getToken";

function Profile () { 
    isLogin()
    const loginToken = getToken();
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

    const date = new Date(dataUser.createdAt); // Your date here
    const dateCreated = date.toLocaleDateString('en-GB');

    return (
        <Fragment>
            <h2 className="text-2xl font-semibold">My Profile</h2>
            <div className="flex mt-3 p-3 rounded-md shadow-md me-3">
                <div className="w-full grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-3 w-full border-t-4 border-teal-200">
                        <h2 className="font-bold mb-4 text-gray-700">{dataUser.name}</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit perspiciatis necessitatibus neque modi, obcaecati unde vel.</p>
                        <div className="bg-gray-200 text-gray-600 text-base rounded-md my-1 py-3 px-2">
                        Status 
                        <span className="float-right bg-green-600 rounded-md px-3 py-1 text-sm text-white">{dataUser.status == 1 ? 'Active' : 'Inactive'}</span>
                        </div>
                        <div className="bg-gray-200 text-gray-600 text-base rounded-md my-1 py-3 px-2">
                        Created At 
                        <span className="float-right  px-3 py-1 text-sm text-gray-500">{dateCreated}</span>
                        </div>
                    </div>
                    <div className="col-span-2 bg-slate-50 p-3 w-full ">
                        <table className="table-fixed w-full text-left ">
                            <tbody>
                                <tr>
                                    <th className="w-3/12">Full Name</th>
                                    <td>: &nbsp;{dataUser.name}</td>
                                </tr>
                                <tr>
                                    <th className="w-3/12">Gender</th>
                                    <td>: &nbsp;{dataUser.gender == "M" ? "Male" : "Female"}</td>
                                </tr>
                                <tr>
                                    <th className="w-3/12">Address</th>
                                    <td>: &nbsp;{dataUser.address}</td>
                                </tr>
                                <tr>
                                    <th className="w-3/12">No. Telp</th>
                                    <td>: &nbsp;{dataUser.telp}</td>
                                </tr>
                                <tr>
                                    <th className="w-3/12">Email</th>
                                    <td>: &nbsp;{dataUser.email}</td>
                                </tr>
                                <tr>
                                    <th className="w-3/12">Role Name</th>
                                    <td>: &nbsp;{dataUser.roleId}</td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="float-right">
                            <a href="#" className="rounded-md bg-green-500 text-white px-3 py-2"> Edit Profile</a>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile
import logo from "../../assets/img/1.png"
import { AiOutlineDashboard, AiOutlineDown, AiOutlineGold, AiOutlineRight, AiOutlineUser } from "react-icons/ai";

function Sidebar() {
    return (
        <>
            <div className="sidebar h-screen drop-shadow-lg">
                <div className="brand mx-10 my-5 w-full">
                    <img src={logo} alt="logo" className="h-5 inline mb-2 me-3" />
                    <h2 className="w-32 text-slate-950 font-bold text-base leading-5 inline-block pt-2">
                        Elearning
                    </h2>
                </div>
                <hr className="mx-5" />
                <div className="nav w-full m-3">
                    <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                        <AiOutlineDashboard className="h-5 mx-1 basis-1/5" />
                        <span className="text-sm font-normal antialiased inline basis-11/12"> Dashboard</span>
                        <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right invisible" />
                    </div>

                    <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                        <AiOutlineUser className="h-5 mx-1 basis-1/5" />
                        <span className="text-sm font-normal antialiased inline basis-11/12"> Data Users</span>
                        <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right" />
                    </div>

                    <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                        <AiOutlineGold className="h-5 mx-1 basis-1/5" />
                        <span className="text-sm font-normal antialiased inline basis-11/12"> Data Users</span>
                        {/* <AiOutlineDown className="h-5 mx-1 me-2" /> */}
                        <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar
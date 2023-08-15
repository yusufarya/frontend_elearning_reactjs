import { useRef, useState } from "react";
import logo from "../../assets/img/1.png"
import { AiOutlineDashboard, AiOutlineDown, AiOutlineGold, AiOutlineRight, AiOutlineUser } from "react-icons/ai";

function Sidebar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let menuId = useRef('')

    const clickMenu = (props) => {
        setMenuIsOpen(!menuIsOpen)
        console.log(props)
        menuId = props
    }

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
                <div className="sidebar-container w-full m-3">

                    <div className="sidebar-component">
                        <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                            <AiOutlineDashboard className="h-5 mx-1 basis-1/5" />
                            <span className="text-sm font-normal antialiased inline basis-11/12"> Dashboard</span>
                            <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right invisible" />
                        </div>
                    </div>
                    <div className="sidebar-component" onClick={() => clickMenu('user')}>
                        <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                            <AiOutlineUser className="h-5 mx-1 basis-1/5" />
                            <span className="text-sm font-normal antialiased inline basis-11/12"> Data Users</span>
                            <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right" />
                        </div>
                        <ul className={menuIsOpen ? "transition ease-in-out delay-150 block" : "hidden"}>
                            <li>Data user 1</li>
                            <li>Data user 2</li>
                            <li>Data user 3</li>
                        </ul>
                    </div>

                    <div className="sidebar-component" onClick={() => clickMenu('class')}>
                        <div className="nav-item w-full py-2 drop-shadow-sm rounded-sm hover:ring-1 ring-slate-400 hover:cursor-pointer flex flex-row">
                            <AiOutlineGold className="h-5 mx-1 basis-1/5" />
                            <span className="text-sm font-normal antialiased inline basis-11/12"> Data Kelas</span>
                            {/* <AiOutlineDown className="h-5 mx-1 me-2" /> */}
                            <AiOutlineRight className="h-4 mt-1 basis-1/4 float-right" />
                        </div>
                        <ul className={menuIsOpen ? "transition ease-in-out delay-150 block" : "hidden"}>
                            <li>Data 1</li>
                            <li>Data 2</li>
                            <li>Data 3</li>
                        </ul>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Sidebar
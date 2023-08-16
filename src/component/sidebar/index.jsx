import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/1.png"

import SubMenu from "./Submenu";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsPerson } from "react-icons/bs"; 
import { TbReportAnalytics } from "react-icons/tb"; 
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
    
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" })
    const [open, setOpen] = useState(isTabletMid? false : true)
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if(isTabletMid){
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [isTabletMid])

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid ?
    {
        open: {
            x: 0,
            width: '16rem',
            transition: {
                damping: 40,
            },
        },
        closed: {
            x: -250,
            width: 0,
            transition: {
                damping: 40,
                delay: 0.15,
            },
        },
    } : {
        open: {
            width: "16rem",
            transition: {
              damping: 40,
            },
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            },
        },
    }
    const subMenusList = [
        {
            name: "Data User",
            icon: BsPerson,
            menus: ["listAdmin", "listTeacher", "listStudent"],
        },
        {
            name: "Data Kelas",
            icon: TbReportAnalytics,
            menus: ["dashboard", "realtime", "events"],
        },
    ];

    return (
        <div>
            <div
            onClick={() => setOpen(false)}
            className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
                open ? "block" : "hidden"
            } `}
            ></div>
            <motion.div
            ref={sidebarRef}
            variants={Nav_animation}
            initial={{ x: isTabletMid ? -250 : 0 }}
            animate={open ? "open" : "closed"}
            className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
                overflow-hidden md:relative fixed
            h-screen "
            >
            <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
            <img
                src="https://img.icons8.com/color/512/firebase.png"
                width={45}
                alt=""
                />
                <span className="text-1xl whitespace-pre">E-LEARNING XYZ</span>
            </div>
    
            <div className="flex flex-col h-full w-full mx-2">
                <ul className="whitespace-pre px-3 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
                    <li>
                        <NavLink to={"/"} className="link inline">
                            <AiOutlineDashboard size={23} className="min-w-max inline me-2" />
                            Dashboard
                        </NavLink>
                    </li>  
        
                    {(open || isTabletMid) && (
                        <div className="border-y py-5 border-slate-300 ">
                            <small className="text-slate-500 inline-block mb-2"> Master Data </small>
                            {
                                subMenusList?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-3">
                                        <SubMenu data={menu} />
                                    </div>
                                ))
                            }
                        </div>
                    )}
                    <li>
                        <NavLink to={"/settings"} className="link inline ">
                            <SlSettings size={23} className="min-w-max inline me-2" />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
            <motion.div
                onClick={() => {
                setOpen(!open);
                }}
                animate={
                open
                    ? {
                        x: 0,
                        y: 0,
                        rotate: 0,
                    }
                    : {
                        x: -10,
                        y: -200,
                        rotate: 180,
                    }
                }
                transition={{ duration: 0 }}
                className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
            >
                <IoIosArrowBack size={25} />
            </motion.div>
            </motion.div>
            <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
            <MdMenu size={25} />
            </div>
        </div>
    );
}

export default Sidebar
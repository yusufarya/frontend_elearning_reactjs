import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/1.png"

import SubMenu from "./Submenu";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineDashboard, AiOutlineRight } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

import MenusList from "../../utils/menu";

function Sidebar() {

    const subMenusList = MenusList
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" })
    const [open, setOpen] = useState(isTabletMid ? false : true)
    const [isActive, setIsActive] = useState('')
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    function menuClick(menu) {
        setIsActive(menu)
    }

    useEffect(() => {
        if (isTabletMid) {
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
            width: '15rem',
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
            width: "15rem",
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

    return (
        <div className="sidebar">
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className="bg-white text-gray shadow-xl z-[999] overflow-hidden md:relative fixed h-screen ">
                <div className="flex justify-center items-center gap-2.5 font-medium border-b py-3 border-slate-300 m-3 me-5">
                    <img
                        src={logo}
                        width={25}
                        alt="logo"
                    />
                    <span className="text-1xl whitespace-pre">E-LEARNING XYZ</span>
                </div>

                <div className="flex flex-col h-full w-full mx-2">
                    <ul className="whitespace-pre px-1 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/"} className={`${isActive == 'dashboard' ? 'bg-blue-100' : ''} link flex p-2 me-4`} onClick={() => menuClick('dashboard')}>
                                <AiOutlineDashboard size={23} className="min-w-max inline pb-1 me-2" />
                                Dashboard
                            </NavLink>
                        </li>

                        {(open || isTabletMid) && (
                            <div className="py-5 bg-white ">
                                <small className="text-slate-500 inline-block ms-2 mb-2"> Master Data </small>
                                {
                                    subMenusList?.map((menu, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                {
                                                    menu.url ?
                                                        <div key={menu.name} className={`flex flex-col gap-1 p-2 me-4 hover:bg-sky-50 rounded-sm ${isActive == menu.name ? 'bg-blue-100' : ''}`}
                                                            onClick={() => menuClick(menu.name)}>
                                                            <NavLink to={menu.url} className="link inline">
                                                                <menu.icon size={23} className="min-w-max inline pb-1 me-2" />
                                                                {menu.name}
                                                            </NavLink>
                                                        </div>
                                                        :
                                                        <div key={menu.name} className={`flex flex-col cursor-pointer gap-1 p-2 me-4 hover:bg-sky-50 rounded-sm ${isActive == menu.name ? 'bg-blue-100' : ''}`}
                                                            onClick={() => menuClick(menu.name)}>
                                                            <SubMenu data={menu} />
                                                        </div>
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        )}
                        <li>
                            <NavLink to={"/settings"} className={`${isActive == 'settings' ? 'bg-blue-100' : ''} link flex p-2 me-4`} onClick={() => menuClick('settings')}>
                                <SlSettings size={23} className="min-w-max inline pb-1 me-2" />
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
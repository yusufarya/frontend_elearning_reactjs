import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = (props) => {
    const [isActive, setIsActive] = useState(false)
    function clickSubmenu(submenu) {
        setIsActive(submenu)
    }
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <>
            {/* <li className={`link ${pathname.includes(props.data.name) && "text-blue-600"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} > */}
            <li className="" onClick={() => setSubMenuOpen(!subMenuOpen)} >
                <props.data.icon size={23} className="min-w-max inline pb-1 me-2" />
                <p className="flex-1 capitalize inline">{props.data.name}</p>
                <AiOutlineRight
                    className={` ${subMenuOpen && "rotate-90"} duration-200 mt-1 inline float-right `}
                />
            </li>
            <motion.ul
                animate={subMenuOpen ? { height: "fit-content", } : { height: 0, }}
                className="flex h-0 flex-col ps-4 text-[0.9rem] font-normal overflow-hidden bg-white"
                style={{ width: `120%`, marginLeft: '-8px', marginBottom: '-8px' }}>
                {
                    props.data.menus?.map((menu, idx) => {
                        return (
                            <li key={idx} onClick={() => clickSubmenu(menu.subname)}>
                                <NavLink
                                    to={menu.url}
                                    className={`link bg-transparent capitalize py-2 px-3 flex ${isActive == menu.subname ? 'font-semibold text-blue-700' : ''}`}
                                > <span className=" mx-2">&#9679;</span>
                                    {menu.subname}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </motion.ul>
        </>
    );
};

export default SubMenu;

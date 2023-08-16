import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
    
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    return (
        <>
        <li className={`link ${pathname.includes(data.name) && "text-blue-600"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} >
            <data.icon size={23} className="min-w-max inline me-2" />
            <p className="flex-1 capitalize inline">{data.name}</p>
            <AiOutlineRight
            className={` ${subMenuOpen && "rotate-90"} duration-200 inline float-right me-5 `}
            />
        </li>
        <motion.ul
            animate={ subMenuOpen ? { height: "fit-content", } : { height: 0, }  }
            className="flex h-0 flex-col ps-8 text-[0.9rem] font-normal overflow-hidden" >
            {data.menus?.map((menu) => (
            <li key={menu}>
                <NavLink
                to={`/${data.name}/${menu}`}
                className="link bg-transparent capitalize my-3"
                >
                {menu}
                </NavLink>
            </li>
            ))}
        </motion.ul>
        </>
    );
};

export default SubMenu;

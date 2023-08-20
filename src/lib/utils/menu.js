
import { BsPerson } from "react-icons/bs"; 
import { TbReportAnalytics } from "react-icons/tb"; 

const MenusList = [
    {
        name: "Data User",
        icon: BsPerson,
        menus: [
            {subname : "Data Admin", url : '/listAdmin'},
            {subname : "Data Teacher", url : '/listTeacher'},
            {subname : "Data Students", url : '/listStudent'},
        ],
        url: ''
    },
    {
        name: "Data Kelas",
        icon: TbReportAnalytics,
        menus: [
            {subname : "Data Kelas 1", url : '/1'},
            {subname : "Data Kelas 2", url : '/2'},
            {subname : "Data kelas 3", url : '/3'},
        ],
        url: ''
    },
    {
        name: "Mata Pelajaran",
        icon: TbReportAnalytics,
        menus: [],
        url: '/subjectsList'
    },
];

export default MenusList
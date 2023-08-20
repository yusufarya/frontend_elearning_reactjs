import { useLocation } from "react-router-dom";
import Sidebar from "../component/sidebar";
import Topbar from "../component/topbar";
function RootLayout({ children }) {

    const location = useLocation();

    return (
        <div className="flex gap-2">
            {
                location.pathname == '/login' || location.pathname == '/register' ?
                    <main className="block top-0 w-full mx-5 mt-5 py-4">{children}</main>
                    :
                    <>
                        <Sidebar />
                        <div className="column-1 w-full">
                            <Topbar />
                            <main className="block top-0 w-full mx-5 mt-5 py-4">{children}</main>
                        </div>
                    </>
            }
        </div>
    )
}

export default RootLayout
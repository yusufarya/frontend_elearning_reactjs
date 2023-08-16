import Sidebar from "../component/sidebar";
import Topbar from "../component/topbar";
function RootLayout({ children }) { 
    return (
        <div className="flex gap-5">
            <Sidebar />
            <Topbar/>
            <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
        </div>
    )
}

export default RootLayout
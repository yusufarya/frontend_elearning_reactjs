import isLogin from "../authorization/cek-login"

function Dashboard () { 

    isLogin()
    return (
        <>
            <h2 className="text-2xl font-semibold">Dashboard</h2>

            <div className="grid grid-cols-4 gap-4">
                <div>01</div>
                <div>09</div>
            </div>
        </>
    )
}

export default Dashboard
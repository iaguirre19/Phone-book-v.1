import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
            <h1>Admin Layout</h1>
            <main>
                < Outlet />        
            </main>
        </>
    )
};

export default AdminLayout
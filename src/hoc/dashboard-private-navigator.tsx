import { Navigate } from "react-router-dom";
import useDashboardAuth from "hooks/use-dashboard-auth";
import { Outlet } from "react-router-dom";


const DashboardPrivateNavigator: React.FC = () => {
    const access = useDashboardAuth();
    return (
        access ? (
            <div>
                <h1>Dashboard menu</h1>
                <Outlet/>
            </div>
        ) : <Navigate to="/admin-login"/>
    );
}

export default DashboardPrivateNavigator;
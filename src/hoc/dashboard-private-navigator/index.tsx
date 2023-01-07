import { Navigate, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import useDashboardAuth from "hooks/use-dashboard-auth";
import AppDrawer from "hoc/dashboard-private-navigator/drawer";
import Header from "hoc/dashboard-private-navigator/header";
import { DrawerHeader, PageWrapper } from "hoc/dashboard-private-navigator/elements";
const DashboardPrivateNavigator: React.FC = () => {
    const access = useDashboardAuth();
    
    return (
        access ? (
            <Box sx={{ display: 'flex' }}>
                <Header/>
                <AppDrawer/>
                <PageWrapper component="main" sx={{ flexGrow: 1 }}>
                    <DrawerHeader />
                    <Outlet/>
                </PageWrapper>
            </Box>
        ) : <Navigate to="/admin-login"/>
    );
}

export default DashboardPrivateNavigator;
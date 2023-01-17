/**
 * External dependencies 
 */ 
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { doAction } from "@wordpress/hooks";
import Box from '@mui/material/Box';
/**
 * Internal dependencies 
 */ 
import AppDrawer from "hoc/dashboard-private-navigator/drawer";
import Header from "hoc/dashboard-private-navigator/header";
import BootLoader from "components/boot-loader";
import { DrawerHeader, PageWrapper } from "hoc/dashboard-private-navigator/elements";
import { UserInterface } from "types/common";

type PropsInterface = {
    user: UserInterface & {
        request: 'pending' | 'done'
    }
}

const DashboardPrivateNavigator: React.FC<PropsInterface> = (props) => {
    const { user } = props;
    
    useEffect(() => {
        if( !user.login ) {
            doAction('authenticate-user')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if( user.request === 'pending' ) {
        return <BootLoader/>
    }

    return (
        ( user && user.login ) ? (
            <Box sx={{ display: 'flex' }}>
                <Header/>
                <AppDrawer/>
                <PageWrapper component="main" sx={{ flexGrow: 1 }}>
                    <DrawerHeader />
                    <Outlet/>
                </PageWrapper>
            </Box>
        ) : <Navigate to="/admin-login" replace/>
    );
}

const applyWithSelect = withSelect( (select: Function) => {
    const global = select('global');
    return {
        user: global.getCurrentUser()
    }
} )

export default compose(
    applyWithSelect
)( DashboardPrivateNavigator ) as React.FC;
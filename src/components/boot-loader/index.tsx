import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { doAction } from "@wordpress/hooks";
/**
 * Internal dependencies 
 */ 
import { UserInterface } from "types/common";

type BootLoaderProps = {
    user: UserInterface & {
        request: 'pending' | 'done'
    };
    setCurrentUser( _ : any): void;
}

const BootLoader: React.FC<BootLoaderProps> = ( props ) => {
    const { user, setCurrentUser } = props;
    const location = useLocation();

    const paths = location.pathname.split('/');
    const isAdmin = paths.includes('admin') || paths.includes('admin-login');

    useEffect(() => {
        doAction('set-page-title', 'Loading...');
        if( isAdmin && !user.login ) {
            doAction('authenticate-user')
        }

        if( !isAdmin ) {
            setTimeout(()=> {
                setCurrentUser({
                    login   : false,
                    request : 'done',
                })
            }, 2000)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            { user.request === 'pending' ? <div>
                <h1>Pending</h1>
            </div>: <Outlet/>}
        </Fragment>
    )
}

const applyWithSelect = withSelect( (select: Function) => {
    const global = select('global');
    return {
        user: global.getCurrentUser()
    }
} )

const applyWithDispatch = withDispatch( (dispatch: Function) => {
    const global = dispatch('global');
    return {
        setCurrentUser: global.setCurrentUser
    }
} )

export default compose(
    applyWithSelect,
    applyWithDispatch
)( BootLoader ) as React.FC;
/**
 * External dependencies 
 */ 
import { doAction } from '@wordpress/hooks';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies 
 */ 
import { UserInterface } from 'types/common';

type Role = string[]

interface PropsInterface {
    children: JSX.Element,
    title: string,
    role: Role,
    user?: UserInterface
}

const canUserAccess = function<T extends Role, U extends string>( allowedRole: T, givenRole: U ): boolean {
    return allowedRole.includes( givenRole );
}

const ValidatePrivateRoute: React.FC<PropsInterface> = (props) => {
    const { user, children, title, role } = props;

    useEffect(() => {
        doAction('set-page-title', title)
        console.log(title)
    }, [title])

    const canAccess = canUserAccess( role, user!.role );
    return canAccess ? children : <Navigate to="404" replace/>
}


const applyWithSelect = withSelect( (select: Function) => {
    const global = select('global');
    return {
        user: global.getCurrentUser()
    }
} )

export default compose(
    applyWithSelect
)( ValidatePrivateRoute ) as React.FC<PropsInterface>;
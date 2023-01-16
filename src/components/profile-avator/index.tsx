/**
 * External dependencies 
 */ 
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { Fragment } from 'react';
/**
 * Internal dependencies 
 */ 
import { 
    Wrapper, Image
} from 'components/profile-avator/elements';
import { UserInterface } from 'types/common';
import AvatorDropdown from 'components/profile-avator/dropdown';

type ProfileAvatorProps = {
    user            : UserInterface,
    isDropdownOpen  : boolean,
    setIsAvatarDropdownOpen( props: boolean ): void,
    setSideMenuOpenStatus(props: boolean): void,
}

const ProfileAvator: React.FC<ProfileAvatorProps> = ( props ) => {
    const { user, isDropdownOpen, setIsAvatarDropdownOpen, setSideMenuOpenStatus } = props;

    const toggleDropdown = (ev: React.SyntheticEvent) => {
        ev.stopPropagation();
        setIsAvatarDropdownOpen( !isDropdownOpen );
        if( window.innerWidth <= 575 ) {
            setSideMenuOpenStatus(false);
        }
    }

    return (
        <Fragment>
            <Wrapper onClick={toggleDropdown} open={isDropdownOpen}>
                <Image loading='lazy' width="35" height="35" src={user.image} alt="profile"/>
                <ExpandMoreIcon/>
            </Wrapper>
            <AvatorDropdown/>
        </Fragment>
    )
}

const applyWithSelect = withSelect( (select: Function) => {
    const global = select('global');
    return {
        user            : global.getCurrentUser(),
        isDropdownOpen  : global.isAvatarDropdownOpen(),
    }
} )

const applyWithDispatch = withDispatch( (dispatch: Function)  => {
    const global = dispatch('global');
    return {
        setIsAvatarDropdownOpen: global.setIsAvatarDropdownOpen,
        setSideMenuOpenStatus: global.setSideMenuOpenStatus
    }
})

export default compose(
    applyWithSelect,
    applyWithDispatch
)( ProfileAvator ) as React.FC;
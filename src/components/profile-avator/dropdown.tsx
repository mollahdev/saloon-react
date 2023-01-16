/**
 * External dependencies 
 */ 
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Portal } from '@mui/material';
import { Box, InputLabel } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import GetAppIcon from '@mui/icons-material/GetApp';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import React, { useRef, useEffect } from 'react';
/**
 * Internal dependencies 
 */
import LoginIcon from '@mui/icons-material/Login';
import { UserInterface } from 'types/common';
import { DropdownContainer, LinkWrapper, LogOutBtn } from 'components/profile-avator/elements';
import { ROLES } from 'types/enum';

type AvatorDropdownProps = {
    user            : UserInterface,
    isDropdownOpen  : boolean,
    setIsAvatarDropdownOpen( props: boolean ): void,
}

const AvatorDropdown: React.FC<AvatorDropdownProps> = (props) => {
    const { user, isDropdownOpen, setIsAvatarDropdownOpen } = props;
    const container = useRef(null);

    useEffect(() => {
        if ( isDropdownOpen ) {
            document.addEventListener("click", onClickOutside, false);
        } else {
            document.removeEventListener("click", onClickOutside, false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDropdownOpen])

    const onClickOutside = (ev: Event) => {
        const node = container.current! as HTMLElement;
        const target = ev.target as HTMLElement;
        if( node && !node.contains(target) && node.getAttribute('open') !== null) {
            setIsAvatarDropdownOpen(false)
        }
    }

    return (
        <Portal>
            <DropdownContainer open={isDropdownOpen} ref={container}>
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    { user.role === ROLES.ADMIN && (
                        <LinkWrapper to="support">
                            <SupportIcon fontSize='medium'/>
                            <InputLabel>Get Support</InputLabel>
                        </LinkWrapper>
                    ) }
                    <LinkWrapper to="profile">
                        <AccountCircleIcon fontSize='medium'/>
                        <InputLabel>My Profile</InputLabel>
                    </LinkWrapper>
                    <LinkWrapper to="support">
                        <InfoIcon fontSize='medium'/>
                        <InputLabel>Get Docs</InputLabel>
                    </LinkWrapper>
                    <LinkWrapper to="support">
                        <SecurityIcon fontSize='medium'/>
                        <InputLabel>2FA Settings</InputLabel>
                    </LinkWrapper>
                    <LinkWrapper to="support">
                        <GetAppIcon fontSize='medium'/>
                        <InputLabel>Install App</InputLabel>
                    </LinkWrapper>
                    { user.role === ROLES.ADMIN && (
                        <LinkWrapper to="dayoff">
                            <AlarmOffIcon fontSize='medium'/>
                            <InputLabel>Day Off</InputLabel>
                        </LinkWrapper>
                    )}
                </Box>
                <LogOutBtn>
                    <LoginIcon/>
                    <InputLabel>Logout</InputLabel>
                </LogOutBtn>
            </DropdownContainer>
        </Portal>
    )
}

const applyWithSelect = withSelect((select: Function) => {
    const global = select('global');
    return {
        user            : global.getCurrentUser(),
        isDropdownOpen  : global.isAvatarDropdownOpen(),
    }
})

const applyWithDispatch = withDispatch((dispatch: Function) => {
    const global = dispatch('global');
    return {
        setIsAvatarDropdownOpen: global.setIsAvatarDropdownOpen,
    }
})

export default compose(
    applyWithSelect,
    applyWithDispatch
)( AvatorDropdown ) as React.FC;
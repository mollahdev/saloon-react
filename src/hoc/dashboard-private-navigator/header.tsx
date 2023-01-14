/**
 * External dependencies 
 */ 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CallReceivedIcon from '@mui/icons-material/CallReceived';import IconButton from '@mui/material/IconButton';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Box } from '@mui/system';
/**
 * Internal dependencies 
 */ 
import { AppBar } from "hoc/dashboard-private-navigator/elements";
import ProfileAvator from 'components/profile-avator';

interface HeaderProps {
    open: boolean;
    pageTitle: string;
    setIsAvatarDropdownOpen(prop: boolean): void;
    setSideMenuOpenStatus(props: boolean): void;
}

const Header: React.FC<HeaderProps> = props => {   
    const { setIsAvatarDropdownOpen, setSideMenuOpenStatus, open, pageTitle } = props;

    const handleDrawerOpen = () => {
        setSideMenuOpenStatus(!open);
        setIsAvatarDropdownOpen(!Boolean(window.innerWidth <= 575));
    }

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{marginRight: 2,}}
                    >
                        { open ? <CallReceivedIcon/> : <MenuIcon /> }
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">{pageTitle}</Typography>
                </Box>
                <Box>
                    <ProfileAvator/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

const applyWithSelect = withSelect(( select: Function ) => {
    const global = select('global');
    return {
        open        : global.getSideMenuOpenStatus(),
        pageTitle   : global.getPageTitle(),
    }
})

const applyWithDispatch = withDispatch(( dispatch: Function ) => {
    const global = dispatch('global')
    return {
        setIsAvatarDropdownOpen: global.setIsAvatarDropdownOpen,
        setSideMenuOpenStatus: global.setSideMenuOpenStatus
    }
})

export default compose(
    applyWithSelect,
    applyWithDispatch
)( Header ) as React.FC
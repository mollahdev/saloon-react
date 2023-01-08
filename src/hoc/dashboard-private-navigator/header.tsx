/**
 * External dependencies 
 */ 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { withSelect, dispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
/**
 * Internal dependencies 
 */ 
import { AppBar } from "hoc/dashboard-private-navigator/elements";

interface HeaderProps {
    open: boolean,
    pageTitle: string,
}

const Header: React.FC<HeaderProps> = props => {   
    const dispatchOpen = dispatch('global').setSideMenuOpenStatus;
    const handleDrawerOpen = () => {
        dispatchOpen(!props.open);
    }

    return (
        <AppBar position="fixed" open={props.open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{marginRight: 2,}}
            >
                { props.open ? <CloseIcon/> : <MenuIcon /> }
            </IconButton>
            <Typography variant="h6" noWrap component="div">{props.pageTitle}</Typography>
            </Toolbar>
        </AppBar>
    )
}

const applyWithSelect = withSelect(( select: Function ) => {
    const global = select('global');
    return {
        open: global.getSideMenuOpenStatus(),
        pageTitle: global.getPageTitle(),
    }
})

export default compose(
    applyWithSelect
)( Header ) as React.FC
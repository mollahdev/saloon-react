/**
 * External dependencies 
 */ 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { applyFilters } from '@wordpress/hooks';
import { NavLink } from 'react-router-dom';
/**
 * Internal dependencies 
 */ 
import { DrawerHeader, Drawer } from "hoc/dashboard-private-navigator/elements";

interface AppDrawerProps {
    open: boolean
}

interface menuItemInterface {
    path: string,
    menu: {
        label: string,
        icon: React.FC
    }
}

const AppDrawer: React.FC<AppDrawerProps> = props => {
    const { open } = props;
    const menus = applyFilters('side-menu-list', []) as []

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader/>
            <List sx={{p: 0}}>
            {(menus || []).map((item: menuItemInterface, index) => {
                if( !item.menu || !item.menu.icon || !item.menu.label ) return null;
                return (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <NavLink className={({ isActive }) => isActive ? 'active-dashboard-nav-menu' : undefined} to={item.path} style={{textDecoration: 'none', fontWeight: 500, color: '#101010', display: 'block'}}>
                            <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                                    <item.menu.icon/>
                                </ListItemIcon>
                                <ListItemText primary={item.menu.label} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                )
            })}
            </List>
        </Drawer>
    )
}

const applyWithSelect = withSelect(( select: Function ) => {
    const global = select('global');
    return {
        open: global.getSideMenuOpenStatus()
    }
})

export default compose(
    applyWithSelect
)( AppDrawer ) as React.FC
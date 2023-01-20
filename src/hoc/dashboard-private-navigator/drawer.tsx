/**
 * External dependencies 
 */ 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { applyFilters } from '@wordpress/hooks';
import { NavLink } from 'react-router-dom';
import { useRef, useEffect, useCallback } from 'react';
/**
 * Internal dependencies 
 */ 
import { DrawerHeader, Drawer } from "hoc/dashboard-private-navigator/elements";

interface AppDrawerProps {
    open: boolean,
    setSideMenuOpenStatus(p: boolean): void;
}

interface menuItemInterface {
    path: string,
    title: string,
    menu: boolean,
    icon: React.FC
}

const AppDrawer: React.FC<AppDrawerProps> = props => {
    const { open, setSideMenuOpenStatus } = props;
    const drawerRef = useRef(null);
    const menus = applyFilters('side-menu-list', []) as [];

    useEffect(() => {
        if( open ) {
            document.addEventListener('click', clickOutsideHandler, false)
        } else {
            document.removeEventListener('click', clickOutsideHandler, false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[open])

    const clickOutsideHandler = useCallback((ev: Event) => {
        ev.stopPropagation();
        const node = drawerRef.current! as HTMLElement;
        const target = ev.target as HTMLElement;
        if( node && !node.contains(target) && window.innerWidth < 678) {
            setSideMenuOpenStatus(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Drawer variant="permanent" open={open} ref={drawerRef}>
            <DrawerHeader/>
            <List sx={{p: 0}}>
            {(menus || []).map((item: menuItemInterface, index) => {
                if( !item.menu || !item.icon || !item.title ) return null;
                return (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <NavLink className={({ isActive }) => isActive ? 'active-dashboard-nav-menu' : undefined} to={item.path} style={{textDecoration: 'none', fontWeight: 500, color: '#101010', display: 'block'}}>
                            <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                                    <item.icon/>
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                )
            })}
            </List>
        </Drawer>
    )
}

const applyWithDispatch = withDispatch(( dispatch: Function ) => {
    const global = dispatch('global');
    return {
        setSideMenuOpenStatus: global.setSideMenuOpenStatus,
    }
})

const applyWithSelect = withSelect(( select: Function ) => {
    const global = select('global');
    return {
        open: global.getSideMenuOpenStatus(),
    }
})

export default compose(
    applyWithSelect,
    applyWithDispatch
)( AppDrawer ) as React.FC
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
  	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
  	}),
  	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
    	duration: theme.transitions.duration.leavingScreen,
  	}),
  	overflowX: 'hidden',
  	width: `calc(${theme.spacing(7)} + 1px)`,
  	[theme.breakpoints.up('sm')]: {
    	width: `calc(${theme.spacing(8)} + 1px)`,
  	},
});

export const PageWrapper = styled(Box)((props: {isblur: string}) => ({
	backgroundImage: 'linear-gradient(108.81deg, #F5FBFF 14.86%, #F6F5FF 99.99%)',
	minHeight: '100vh',
	'@media( max-width: 768px )': {
		marginLeft: '56px',
		...( props.isblur === 'false' ? {} : {
			filter: 'blur(5px)',
			pointerEvents: 'none',
			opacity: '.5'
		} )
	}
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
	boxShadow: 'none',
	backgroundColor: '#aecfef',
	color: '#101010',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		zIndex: 99,
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
		'@media( max-width: 768px )': {
			position: 'fixed',
			left: 0,
		}
	}),
);
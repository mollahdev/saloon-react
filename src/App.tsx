/**
 * External dependencies 
 */ 
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Routes, Route, Navigate } from "react-router-dom"
import { addFilter } from '@wordpress/hooks';
/**
 * Internal dependencies 
 */ 
import DashboardPrivateNavigator from "hoc/dashboard-private-navigator";
import DashboardLogin from "frontend/dashboard-login";
import Overview from "admin/overview";
import NotFound from "frontend/not-found";
import Service from "admin/service";
import Home from 'frontend/home';
import { Roles } from "types/enum";

const routes = {
  public: [
    {
      title : 'Home | Big Apple Barbers Shop',
      path  : '',
      page  : Home,
    },
    {
      title : 'Login | Big Apple Barber Shop',
      path  : 'admin-login',
      page  : DashboardLogin,
    },
    {
      title : 'Services | Big Apple Barber Shop',
      path  : 'service',
      page  : Service,
    },
    {
      title : '404 | Big Apple Barber Shop',
      path  : '*',
      page  : NotFound
    }
  ],

  private: [
    {
      title: '',
      path: '',
      page() {
        return <Navigate to="overview"/>
      }
    },
    {
      title : 'Overview | Dashboard',
      path : 'overview',
      page  : Overview,
      role  : [ Roles.ADMIN ],
      menu: {
        label : 'Overview',
        icon  : MailIcon
      }
    },
    {
      title : 'Services | Dashboard',
      path  : 'service',
      page  : Service,
      role  : [ Roles.ADMIN ],
      menu  : {
        label : 'Services',
        icon  : InboxIcon
      }
    },
    {
      title : '404 | Dashboard',
      path  : '*',
      page  : NotFound,
      role  : [ Roles.ADMIN, Roles.EDITOR, Roles.VIEWER ],
    }
  ]
}
// create and attach dashboard sidemenu
addFilter('side-menu-list', 'app', () => routes.private)

// main router component
const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/*">
          { ( routes.public ).map(( item, index ) => (
            <Route 
              key={index} 
              path={ item.path }
              element={<item.page title={item.title}/>}/>
          ) ) }
        </Route>
        
        <Route path="admin/*" element={<DashboardPrivateNavigator/>}>
          { ( routes.private ).map(( item, index ) => (
            <Route 
              key={index}
              path={ item.path }
              element={<item.page menu={item.menu} title={(item.menu || {label: 'Overview'}).label}/>}/>
          ) ) }
        </Route>
    </Routes>
  );
}

export default App;
/**
 * External dependencies 
 */ 
import { Routes, Route, Navigate } from "react-router-dom"
import { addFilter } from '@wordpress/hooks';
/**
 * External material icons
 */ 
import InsightsIcon from '@mui/icons-material/Insights';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
/**
 * Internal dependencies 
 */ 
import DashboardPrivateNavigator from "hoc/dashboard-private-navigator";
import ValidatePrivateRoute from 'hoc/validate-private-route';
import DashboardLogin from "frontend/dashboard-login";
import Overview from "admin/overview";
import NotFound from "frontend/not-found";
import Home from 'frontend/home';
import BootLoader from "components/boot-loader";

import { default as AdminServices } from "admin/services";
import { default as AdminAppointments } from 'admin/appointments';
import { default as AdminBarbers } from "admin/barbers";

import { ROLES } from "types/enum";

/**
 * App pages with sidebar menu
 */ 
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
      page  : AdminServices,
    },
  ],

  private: [
    {
      path : 'overview',
      page  : Overview,
      role  : [ ROLES.ADMIN, ROLES.EDITOR, ROLES.VIEWER ],
      menu: {
        label : 'Overview',
        icon  : InsightsIcon
      }
    },
    {
      path : 'appointments',
      page  : AdminAppointments,
      role  : [ ROLES.ADMIN, ROLES.EDITOR, ROLES.VIEWER ],
      menu: {
        label : 'Appointments',
        icon  : PermContactCalendarIcon
      }
    },
    {
      path  : 'services',
      page  : AdminServices,
      role  : [ ROLES.ADMIN ],
      menu  : {
        label : 'Services',
        icon  : ContentCutIcon
      }
    },
    {
      path  : 'barbers',
      page  : AdminBarbers,
      role  : [ ROLES.ADMIN ],
      menu  : {
        label : 'Barbers',
        icon  : ConnectWithoutContactIcon
      }
    },
  ]
}

/**
 * 
 * create and attach dashboard sidemenu
 * 
*/
addFilter('side-menu-list', 'app', () => routes.private)

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/*" element={<BootLoader/>}>
          { ( routes.public ).map(( item, index ) => (
            <Route 
              key={index} 
              path={ item.path }
              element={<item.page title={item.title}/>}/>
          ) ) }
          <Route path="*" element={<NotFound/>}/>
        </Route>
        
        <Route path="admin/*" element={<DashboardPrivateNavigator/>}>
          { ( routes.private ).map(( item, index ) => (
            <Route 
              key={index}
              path={ item.path }
              element={
                <ValidatePrivateRoute role={item.role} title={item.menu.label}>
                  <item.page/>
                </ValidatePrivateRoute>
              }/>
          ) ) }
          <Route index element={<Navigate to="overview" replace/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom"
/**
 * frontend public pages 
 */ 
import NotFound from "frontend/not-found";
import Home from 'frontend/home';
import DashboardLogin from "frontend/dashboard-login";
/**
 * admin pages 
 */ 
import Overview from "admin/overview";
import Service from "admin/service";

import DashboardPrivateNavigator from "hoc/dashboard-private-navigator";
const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/*">
          <Route index element={<Home/>}/>
          <Route path="admin-login" element={<DashboardLogin/>} />
          <Route path="service" element={<Service/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
        
        <Route path="admin/*" element={<DashboardPrivateNavigator/>}>
          <Route index element={<Overview/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  );
}

export default App;
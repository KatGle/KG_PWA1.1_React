import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layouts from '../../pages/Layouts';
import PAGES from '../../pages/PAGES';
import AccountSettings from '../../pages/AccountSettings';
import Authentications from '../../pages/Authentications';
import Dashboard from '../../pages/Dashboard';
import SNEAT from '../../pages/SNEAT';


function Routing() {
    return (
        <Routes>
            <Route path="/sneat" element={<SNEAT/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/layouts" element={<Layouts/>}></Route>
            <Route path="/pages" element={<PAGES/>}></Route>
            <Route path="account_settings" element={<AccountSettings/>}></Route>
            <Route path="authentications" element={<Authentications/>}></Route>
        </Routes>
    )
}

export default Routing;
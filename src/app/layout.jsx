import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function Layout() {
  return (
    <div className="app h-full flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

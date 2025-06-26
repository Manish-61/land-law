// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

export default function Layout() {
  return (
    <>
      <Navbar />          {/* Always visible */}
      <Outlet />          {/* Page-specific content */}
    </>
  );
}

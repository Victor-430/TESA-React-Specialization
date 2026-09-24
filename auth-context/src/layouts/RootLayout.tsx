import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col text-[#010101]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}


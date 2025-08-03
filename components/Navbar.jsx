'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null); // 👈 This updates the UI immediately
    window.location.href = '/login';
  };

  return (
    <nav className="bg-blue-200 border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition">
        MiniLinkedIn
      </Link>
      <div className="flex space-x-6 items-center text-gray-700 text-sm">
        <Link href="/post" className="hover:text-blue-500 transition font-medium">
          New Post
        </Link>
        {user ? (
          <>
            <Link href="/profile/me" className="hover:text-blue-500 transition font-medium">
              My Profile
            </Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline font-medium">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="hover:text-blue-500 transition font-medium">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

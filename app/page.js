// app/page.js or app/home/page.js
'use client';

import { useEffect, useState } from 'react';
import API from '@/lib/api';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Loading bar */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div className="h-full bg-blue-500 animate-pulse" style={{ width: '100%' }}></div>
        </div>
      )}

      <main className="max-w-xl mx-auto mt-6 px-4">
        <h1 className="text-2xl font-bold mb-4">Public Feed</h1>
        {loading ? (
          <div className="text-center text-gray-500">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-400">No posts yet.</div>
        ) : (
          posts.map(post => <PostCard key={post._id} post={post} />)
        )}
      </main>
    </>
  );
}

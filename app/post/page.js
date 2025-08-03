'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/api';
import Navbar from '@/components/Navbar';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const router = useRouter();

  // ✅ Redirect unauthenticated users
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await API.post('/posts', { content });
      router.push('/');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            What's on your mind?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              required
              rows="5"
              maxLength={500}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, stories, or anything interesting..."
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>

            <div className="flex justify-between text-sm text-gray-500">
              <span>{content.length}/500 characters</span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

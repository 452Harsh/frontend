'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';
import API from '@/lib/api';

export default function ProfilePage() {
  const params = useParams();
  const [profile, setProfile] = useState(null);

  const userId =
    params.userId === 'me'
      ? typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('user'))?._id
        : null
      : params.userId;

  useEffect(() => {
    if (!userId) return;

    API.get(`/auth/profile/${userId}`)
      .then((res) => {
        const { user, posts } = res.data;
        const postsWithAuthor = posts.map((post) => ({
          ...post,
          author: user,
        }));
        setProfile({ user, posts: postsWithAuthor });
      })
      .catch((err) => console.error(err));
  }, [userId]);

  if (!profile) return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;

  const { user, posts } = profile;

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 px-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl uppercase">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Posts */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Posts</h2>
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="text-gray-500">This user hasn’t posted anything yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

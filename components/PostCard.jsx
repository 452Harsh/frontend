'use client';

import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 mb-6 transition hover:shadow-lg">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg uppercase">
          {post.author?.name?.charAt(0)}
        </div>
        <div className="ml-3">
          <Link
            href={`/profile/${post.author?._id || 'me'}`}
            className="font-medium text-gray-800 hover:underline"
          >
            {post.author?.name || 'You'}
          </Link>
          <div className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
    </div>
  );
}

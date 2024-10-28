"use client";

import { useState } from 'react';
import { api } from '../../utils/api';

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await api.post('/posts', { title, body });
        alert(response.data.message);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-md mx-auto p-6">
            <h1 className='text-3xl dark:text-white/90 font-semibold'>Create new post</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <textarea
                value={body} 
                onChange={e => setBody(e.target.value)}
                placeholder="Enter post content"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 min-h-[120px] resize-y"
            />
            <button 
            type="submit" className=" text-white font-semibold py-3 px-6 bg-gray-700 rounded-full">
                Submit Post
            </button>
        </form>
    );
};

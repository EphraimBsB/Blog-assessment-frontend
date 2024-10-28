"use client";

import React from 'react';
import { SetStateAction, useEffect, useState } from 'react';
import { api } from '../utils/api';
import Link from 'next/link';
import { Post } from '../../public/interfaces/post';

export default function Posts(){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        api.get('/posts').then((response: { data: SetStateAction<Post[]>; }) => setPosts(response.data));
    }, []);

    return (
        <div>
            <h1 className='text-4xl dark:text-white/90 font-bold'>Blog Posts</h1>
            <ul className='w-full'>
                {posts.map(post => (
                    <li key={post.id} className='mt-4 text-2xl dark:text-white/90'>
                        <Link className='underline hover:text-white/70' href={`/posts/${post.id}`}>{post.title}</Link>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

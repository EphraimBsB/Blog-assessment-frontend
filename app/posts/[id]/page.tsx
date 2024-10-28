"use client";

// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { PostDetails } from '@/public/interfaces/post';


export default function PostDetailPage({ params }: { params: { id:string } }){
    // const router = useRouter();
    const { id } = params;
    const [post, setPost] = useState<PostDetails | null>(null);

  const [newComment, setNewComment] = useState('');

    const addComment = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await api.post(`/posts/comment`, { postId: id, userId: post?.user.id, content: newComment });
        alert(response.data.message);
    };

    useEffect(() => {
        if (id) {
            api.get(`/posts/${id}`).then(response => setPost(response.data));
        }
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
            <h1 className='text-3xl mt-5 mb-2 font-semibold'>{post.title}</h1>
            <p className='mb-2'>{post.body}</p>
            <p className='mb-5 text-gray-400'>By: {post.user.name} ({post.user.email})</p>
            <h3 className='text-2xl mb-2 font-semibold'>Comments</h3>
            <ul>
                {post.comments.map((comment, index) => (
                    <li className='mb-3' key={index}>
                        <p>{comment.name} - {comment.body}</p>
                        <p className='text-gray-400'>{comment.email}</p>
                    </li>
                ))}
            </ul>
            <br />
            <div className="mt-6">
        <h3 className="text-lg font-semibold">Add a comment</h3>
        <textarea
          className="w-full p-2 mt-2 border rounded-md"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
          onClick={addComment}
        >
          Submit comment
        </button>
      </div>
        </main>
    );
};

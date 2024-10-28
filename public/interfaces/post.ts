export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostDetails {
    title: string;
    body: string;
    user: { id: number; name: string; email: string };
    comments: Array<{ body: string; name: string; email: string }>;
}
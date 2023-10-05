import React from "react";
import { postsAPI } from "../services/PostsService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostList: React.FC = () => {
    const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery(15);
    const [createPost, {}] = postsAPI.useCreatePostMutation();
    const [deletePost, {}] = postsAPI.useDeletePostMutation();
    const [updatePost, {}] = postsAPI.useUpdatePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
            {isLoading && <h1>Loading posts...</h1>}
            {error && <h1>Error</h1>}
            <button onClick={handleCreate}>Create post</button>
            {posts && posts.map(post => (
                <PostItem update={updatePost} remove={deletePost} key={post.id} post={post} />
            ))}
        </div>
    )
};

export default PostList;
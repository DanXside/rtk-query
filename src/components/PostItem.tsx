import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
    };

    const handleUpdate = () => {
        const title = prompt() || '';
        update({...post, title});
    }
    
    return (
        <div
            style={{marginTop: '20px', display: 'flex', width: '400px', justifyContent: 'space-between', alignItems: 'center', border: '2px solid green'}}
        >
            <div onClick={handleUpdate}>
                {post.id} - {post.title}
            </div>
            <button onClick={handleRemove}>DELETE</button>
        </div>
    )
}

export default PostItem;
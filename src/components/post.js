import React from 'react';

const PostPage = () => {
    // Use props or React Router to get the post data
    const post = {
        id: 1,
        text: 'This is a sample post',
        username: 'user1',
    };

    return (
        <div>
            <h1>Post Page</h1>
            <div>
                <p>{post.text}</p>
                <p>Posted by: {post.username}</p>
            </div>
            {/* Add comments and likes here */}
        </div>
    );
};

export default PostPage;

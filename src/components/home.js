import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from your data source or API
        // For simplicity, we'll assume you have an array of post objects
        const samplePosts = [
            { id: 1, text: 'This is a sample post 1', username: 'user1' },
            { id: 2, text: 'This is a sample post 2', username: 'user2' },
            // Add more sample posts here
        ];
        setPosts(samplePosts);
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.text}</p>
                    <p>Posted by: {post.username}</p>
                </div>
            ))}
        </div>
    );
};

export default HomePage;

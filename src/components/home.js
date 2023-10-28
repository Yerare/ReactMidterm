import React from 'react';

function Tweet({ username, tweet, timestamp }) {
    return (
        <div className="tweet">
            <p className="username">{username}</p>
            <p className="tweet-text">{tweet}</p>
            <p className="timestamp">{timestamp}</p>
        </div>
    );
}

function App() {
    const tweets = [
        {
            username: 'JohnDoe',
            tweet: 'Hello, Twitter!',
            timestamp: '2 hours ago',
        },
        {
            username: 'JaneSmith',
            tweet: 'Just had a great day at the beach!',
            timestamp: '4 hours ago',
        },
        {
            username: 'AliceJohnson',
            tweet: 'Excited to learn JavaScript today!',
            timestamp: '6 hours ago',
        },
        // Add more tweets as needed
    ];

    return (
        <div className="App">
            <h1>Twitter Home Page</h1>
        </div>
    );
}

export default App;

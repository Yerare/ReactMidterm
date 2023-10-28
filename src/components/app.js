import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostPage from './PostPage';
import ProfilePage from './ProfilePage';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    {/* Your app header */}
                </header>
                <main>
                    <Switch>
                        {/* Define your routes */}
                        <Route path="/" exact component={HomePage} />
                        <Route path="/post/:postId" component={PostPage} />
                        <Route path="/profile" component={ProfilePage} />
                    </Switch>
                </main>
                <footer>
                    {/* Your app footer */}
                </footer>
            </div>
        </Router>
    );
}

export default App;

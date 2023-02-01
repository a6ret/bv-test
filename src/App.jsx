import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import User from './pages/user/User';

export default function App() {
    return (
        <div>
            <Router>
                <Navigation />

                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/post'} element={<Post />} />
                    <Route path={'/user'} element={<User />} />
                </Routes>
            </Router>
        </div>
    );
}

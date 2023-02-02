import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import User from './pages/user/User';
import PostDetail from './pages/post/PostDetail';
import Comment from './pages/post/Comment';
import SharedPostLayout from './pages/post/SharedPostLayout';

export default function App() {
    return (
        <div>
            <Router>
                <Navigation />

                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/post'} element={<SharedPostLayout />}>
                        <Route index element={<Post />} />
                        <Route path={':postId'} element={<PostDetail />}>
                            <Route path={'comments'} element={<Comment />} />
                        </Route>
                    </Route>
                    <Route path={'/user'} element={<User />} />
                </Routes>
            </Router>
        </div>
    );
}

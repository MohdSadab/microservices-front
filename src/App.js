import './App.css';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState({});

  return (
    <div className="container">
      <PostCreate setPosts={setPosts}/>
      <PostList posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default App;

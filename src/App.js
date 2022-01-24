
import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h2 style={{backgroundColor: 'red', color: 'white'}}> CRUD Application Using MERN</h2>

<nav class="navbar navbar-light bg-light">
  <div class="container">
  <a class="navbar-brand" href="/">Post List</a>
  <a class="navbar-brand" href="/add">Add Post</a>
  <a class="navbar-brand" href="/edit">Edit Post</a>
  </div>
</nav>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<PostList/>} />
       <Route path="add" element={<AddPost />} />
       <Route path="edit" element={<EditPost />} />
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;

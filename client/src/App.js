
import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h2 style={{backgroundColor: 'red', color: 'white'}}> CRUD Application Using MERN</h2>

<nav className="navbar navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="/">Post List</a>
  <a className="navbar-brand" href="/add">Add Post</a>
  <a className="navbar-brand" href="/edit">Edit Post</a>
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

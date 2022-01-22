
import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h2> CRUD Application Using MERN</h2>
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

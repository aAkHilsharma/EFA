import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Form from './components/form/Form';
import MainFeed from './components/feed/MainFeed';
import PostPage from './routes/post/Post';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Form />} />
      <Route path='/home' element={<Home />}>
        <Route path='posts' element={<>
          <MainFeed />
        </>} />
        <Route path='post' element={<>
          <PostPage />
        </>} />
      </Route>
    </Routes>
  );
}

export default App;

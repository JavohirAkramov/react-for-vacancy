import { Provider } from 'react-redux'
import { store } from './redux/redux-store'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import PostListContainer from './components/PostList/PostListContainer';
import AddPostContainer from './components/AddPost/AddPostContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Sidebar />
          <Routes>
            <Route path='/'element={<PostListContainer />} />
            <Route path='/add'element={<AddPostContainer />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

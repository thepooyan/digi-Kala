import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/content/Content';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='/' element={<Content/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
  );
}

export default App;

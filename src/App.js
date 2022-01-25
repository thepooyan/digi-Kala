import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/content/Content';
import HomePage from './components/homepage/HomePage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='/' element={<Content/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Sample from './components/sample/Sample';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='/' element={<Sample/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

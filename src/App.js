import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import { LoginProvider } from "./data/GeneralInfo";
import Store from './redux/productsStore'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Provider store={Store}> <LoginProvider><HomePage /></LoginProvider></Provider>}>
            <Route path="/" element={<Content />} />
          </Route>
        <Route path="/login" element={<LoginProvider><Login /></LoginProvider>} />
      </Routes>
    </Router>
  );
}

export default App;

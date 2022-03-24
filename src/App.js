import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BestSeller from "./components/caragories/bestSeller/BestSeller";
import Discounts from "./components/caragories/bestSeller/Discounts";
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
            <Route path="/bestseller" element={<BestSeller/>}/>
            <Route path="/discounts" element={<Discounts/>}/>
          </Route>
        <Route path="/login" element={<LoginProvider><Login /></LoginProvider>} />
      </Routes>
    </Router>
  );
}

export default App;

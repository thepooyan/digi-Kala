import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BestSeller from "./components/caragories/bestSeller/BestSeller";
import Discounts from "./components/caragories/bestSeller/Discounts";
import Content from "./components/content/Content";
import EachProduct from "./components/eachProduct/EachProduct";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import AllProvider from "./data/AllProvider";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <AllProvider><HomePage/></AllProvider>}>
            <Route path="/" element={<Content />} />
            <Route path="/bestseller" element={<BestSeller/>}/>
            <Route path="/discounts" element={<Discounts/>}/>
            <Route path=":productID" element={<EachProduct/>}/>
          </Route>
        <Route path="/login" element={<AllProvider><Login/></AllProvider>} />
      </Routes>
    </Router>
  );
}

export default App;

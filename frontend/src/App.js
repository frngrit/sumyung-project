import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Comfirm from './pages/Confirm'
import Home from './pages/Home'
import Order from './pages/Order'
import Payment from './pages/Payment'
import Tracking from "./pages/Tracking";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/order' element = {<Order />} />
            <Route path = '/checkout' element = {<Comfirm />} />
            <Route path = '/payment' element = {<Payment />} />
            <Route path = '/track' element = {<Tracking />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

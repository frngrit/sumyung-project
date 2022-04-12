import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Comfirm from './pages/Confirm'
import Home from './pages/Home'
import Order from './pages/Order'
import Payment from './pages/Payment'
import Tracking from "./pages/Tracking";
import { useDispatch, useSelector } from "react-redux";
import { getFoods, reset} from "./features/foods/foodSlice";
import {  useEffect } from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFoods())

    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  const state = useSelector((state) => state.food)
  const { foods } = state
  const latestFoods = foods ? foods[0] : {}
  const { isOpen } = latestFoods
  return (
    <>
      {isOpen ? (
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/order' element={<Order />} />
              <Route path='/checkout' element={<Comfirm />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/track' element={<Tracking />} />
            </Routes>
          </div>
        </Router>) 
        : (
        <div className="container">
          <h1 className="display-3 text-center">Close</h1>
        </div>)
        }

    </>
  );
}

export default App;

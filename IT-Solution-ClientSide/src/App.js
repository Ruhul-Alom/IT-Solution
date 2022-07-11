import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import React, { createContext, useState } from 'react';
import Home from '../src/Components/Home/Home/Home';
import LogIn from '../src/Components/User/LogIn/LogIn';
import AddOrder from './Components/User/AddOrder/AddOrder';
import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute'
import OrderList from './Components/User/OrderList/OrderList';
import Review from './Components/User/Review/Review';
import DashBoard from './Components/User/Admin/DashBoard';
import AllOrderInfo from './Components/User/Admin/AllOrderInfo/AllOrderInfo';
import AllServiceInfo from './Components/User/Admin/AllServiceInfo/AllServiceInfo';
import AddService from './Components/User/AddService/AddService';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>

          <PrivateRoute path="/allorder">
            <AllOrderInfo></AllOrderInfo>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <AllServiceInfo></AllServiceInfo>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addToOrder/:_id">
            <AddOrder user={loggedInUser}></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList user={loggedInUser}></OrderList>
          </PrivateRoute>
          <PrivateRoute exact path="/reveiw">
            <Review user={loggedInUser}></Review>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;

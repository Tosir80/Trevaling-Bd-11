import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AddOffer from './Components/AddOffer/AddOffer';
import Book from './Components/Book/Book';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MangeAllOrder from './Components/MangeAllOrder/MangeAllOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/book/:offersid'>
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute  path='/myorder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute  path='/manageallorder'>
              <MangeAllOrder></MangeAllOrder>
            </PrivateRoute>
            <PrivateRoute  path='/addoffer'>
              <AddOffer></AddOffer>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

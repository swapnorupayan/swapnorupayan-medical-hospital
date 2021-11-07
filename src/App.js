import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Details from './Pages/Details/Details/Details';
import DoctorsGallery from './Pages/Gallery/DoctorsGallery/DoctorsGallery';
import ServicesGallery from './Pages/Gallery/ServicesGallery/ServicesGallery';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path='/doctorg'>
              <DoctorsGallery></DoctorsGallery>
            </Route>
            <Route exact path='/servicesg'>
              <ServicesGallery></ServicesGallery>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path='*'>
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

import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import AboutUs from './components/aboutUs';
import Discord from './components/discord';
import Footer from './components/footer';

function App() {
  return (
    <div
      className="App">
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <Navbar/>
        <div className='content-wrap'>
          <Switch>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/discord' component={Discord}/>
            <Route path='/not-found' component={NotFound}/>
            <Route path='/' exact component={Main}/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

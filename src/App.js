import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div 
      className="App">
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;

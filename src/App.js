// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar/NavBar';
import Indexs from './Componets/Indexs/Indexs';
import Contact from './Componets/Contact/Contact';

function  App() {
  return (
    <BrowserRouter  className="App">
      <NavBar/>
      <Route exact path="/" component={Indexs}/>
      <Route path="/conatct" component={Contact}/>
    </BrowserRouter>
  );
}

export default App;

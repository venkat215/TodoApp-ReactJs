import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './children/Footer';
import Main from './children/Main';
import NavBar from './children/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <NavBar />
        <Main />
      </div>
    )
  }
}

export default App;

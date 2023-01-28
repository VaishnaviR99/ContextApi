import Nav from './components/Nav';
import Main from './components/Main';
import { useState } from 'react';
import ctx from './components/mycontext';
import './App.css';

function App() {
 const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <div className="App">
      <ctx.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {isLoggedIn && <Nav />}
        <Main/>
      </ctx.Provider>
      
       
    </div>
  );
}

export default App;

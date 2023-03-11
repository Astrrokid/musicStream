import './App.css';
import card from './components/images/card.png'
import React from'react';
import Main from './components/Main.jsx'
import LeftSidebar from './components/LeftSidebar.jsx'
import RightSidebar from './components/RightSidebar.jsx'
import 'remixicon/fonts/remixicon.css';


function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSidebar />

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

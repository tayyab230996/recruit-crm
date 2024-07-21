import { useState } from 'react';
import './App.css';
import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';
import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="content">
        <LeftSideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;

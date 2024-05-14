import { useState } from 'react';
import './App.css';
import LoginRegister from './LoginRegister/LoginRegister';
import HomePage from './components/HomePage';

const DUMMY_WEBSITES = [
  { id: "e1", title: "Leetcode", timeSpent: 94.67, date: new Date(2024, 4, 7) },
  { id: "e2", title: "GitHub", timeSpent: 120.50, date: new Date(2024, 4, 8) },
  { id: "e3", title: "Stack Overflow", timeSpent: 85.25, date: new Date(2024, 4, 9) },
];

function App() {
  const [webSites, setWebsites] = useState(DUMMY_WEBSITES);

  
  return (
    <div className="App">
      {/* <h1 className='heading'>Activity Tracker</h1> */}
      <LoginRegister/>
      <HomePage/>
    </div>
  );
}

export default App;

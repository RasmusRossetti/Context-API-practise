import Login from './components/Login';
import './App.css';
import Profile from './components/Profile';
import { useState, useEffect } from 'react';
import { LoginContext } from './Contexts/LoginContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(
        'http://universities.hipolabs.com/search?country=United+States'
      );
      const data = await res.json(res);
      setData(data.slice(0, 50));
    };
    fetchOrders();
  }, []);

  return (
    <div className='App'>
      <LoginContext.Provider
        value={{ username, setUsername, setShowProfile, data }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

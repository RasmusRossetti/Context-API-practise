import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Login = () => {
  const { setUsername, setShowProfile, data } = useContext(LoginContext);

  console.table(data);

  return (
    <div>
      <input
        type='text'
        placeholder='Username'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type='text' placeholder='Password' />
      <button
        onClick={() => {
          setShowProfile(true);
        }}>
        LOGIN
      </button>
      {data.map((datas) => {
        return (
          <div>
            <h1>{datas.country}</h1>
            <h1>{datas.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Login;

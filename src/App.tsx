import React from 'react';
import { getAvatar } from './services';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <img
        src={getAvatar('right-profilef5f5fb73-0ea8-4b62-8435-03abd6720093.jpg')}
        alt="avatar"
      />
    </div>
  );
};

export default App;

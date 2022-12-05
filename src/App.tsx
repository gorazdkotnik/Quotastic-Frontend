import React from 'react';
import { request } from './helpers';

function App() {
  React.useEffect(() => {
    request('/quotes')
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return <div>App</div>;
}

export default App;

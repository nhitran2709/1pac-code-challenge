// Libs
import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from 'store';

// Screen
import Screens from 'screens';

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Screens />
    </Provider>
  </div>
);

export default App;

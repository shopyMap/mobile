import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './Navigation.tsx';
import {store} from './src/store/store.ts';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

import './App.css';
import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import HelloWorld from './components/common/HelloWorld/HelloWorld';

const { persistor, store } = configureStore();

function App() {
  return (
    <main className='main'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelloWorld msg=' You have sucsecfully created react project' />
        </PersistGate>
      </Provider>
    </main>
  );
}

export default App;

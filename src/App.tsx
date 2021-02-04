import React from 'react';
import { Provider } from 'react-redux';
import CatList from './components/CatList';
import KittyList from './components/KittyList';
import {configStore} from './store/configStore';

const store = configStore();
console.log("store",store.getState());
const App = () => {
  return (
   <Provider store={store}>
      <CatList/>
      <KittyList/>
    </Provider>
  );
}

export default App;

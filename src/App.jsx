import React from "react";
import { Provider } from 'mobx-react';
import Main from './components/Main';

import userStore from './stores/userStore';

const stores = {
  userStore
};

function App() {
  return (
    <Provider {...stores}>
      <Main />
    </Provider>
  );
}

export default App;

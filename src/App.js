import React, { useState } from 'react';
import Navmenu from './components/Navmenu';
import Segomenu from './components/Segomenu';
import Cultivo from './huerto/cultivo';

function App() {
  return (
    <useState>
      <Navmenu />
      
      <Cultivo />

      <Segomenu />

    </useState>

  );
}

export default App;

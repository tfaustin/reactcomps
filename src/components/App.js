import React from 'react';
import './App.scss';
import Header from './headers/Header.js';
import Sidemenu1 from './sidemenus/sidemenu1.js';

/* Road Map

Components List
1.	Navigations
2.	Side Menus
3.	Search menus
4.	User Profiles
5.	Sign ups forms
6.	Sign In forms
7.	CRUD Form
8.	Data Tables (CRUD)
9.	Data Viz 
10.	Cards 
*/


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidemenu1/>
     
    </div>
  );
}

export default App;

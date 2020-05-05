import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './components/Panel';
import Tweets from './components/Tweets';
import Search from './components/Search';
import 'simplebar';
import 'simplebar/src/simplebar.css';
import SearchState from './contexts/SearchContext/SearchState';



function App() {
  return (
    <div className="App">
    <SearchState>
    <Navbar></Navbar>
      <div className="parentPanels">
      <Panel> </Panel>
      <Tweets> </Tweets>
      <Search> </Search>
      </div>
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://ratedb.com/"> rateDB.com</a>
      </div>
    </footer>
    </SearchState>
    </div>
  );
}

export default App;

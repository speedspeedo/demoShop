import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Home from './pages/Home';
import OnlineShop from './pages/Online';
import OfflineShop from './pages/Offline';
import SearchResults from './pages/SearchResults';


import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path='/'
              element={
                <Home />
              }
            />

            <Route 
              path='/online'
                element={
                  <OnlineShop />
                }
            />

            <Route 
              path='/offline'
                element={
                  <OfflineShop />
                }
            />

            <Route 
              path='/searchResults'
              element={
                <SearchResults />
              }
            />
            
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;

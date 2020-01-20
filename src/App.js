import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/Search';
import Details from './components/Details';
import Book from './components/Book';
function App() {
  
  return (
    <div>
       <BrowserRouter>
          <Route  exact path="/" render={props => <Home {...props}/>}/>
          <Route  exact path="/search" render={props => <SearchBar {...props}/>}/>
          <Route  exact path="/book" render={props => <Book {...props}/>}/>
          <Route  exact path="/detail/:id" render={props => <Details {...props}/>}/>
          
    </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react';

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import {BookList} from "./pages/BookList"
import {Book} from "./pages/Book";
import {NewBook} from "./pages/NewBook"; 
import { NotFound  } from './pages/NotFound';
import { BookLayout } from './BookLayout';
import { About } from './pages/About';
import { BookRoutes } from './BookRoutes';

function App() {
  return (
   
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>

  <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/books" element={<BookLayout />}> 
        <Route index element={<BookList />}/>
        <Route path=":id" element={<Book/>} /> 
        <Route path="new" element={<NewBook/>} />
      </Route>
      <Route path='*' element={<NotFound />}/>
      {/* <Route path='/books' element={<BookList/>} />
      <Route path='/books/:id' element={<Book />}/>
      <Route path='/books/new' element={<NewBook />}/>
       */}

  </Routes>
    </>
  );
}

export default App;
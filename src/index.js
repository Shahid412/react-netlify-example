import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import/export are ES6 modules 

// import books 
import {books} from './data/books'

// default export 
// can rename it as well 
// e.g 
// import SpecificBook from './components/Books'
import Book from './components/Books'

function BookList () {
  return (
    <>
      <section className='booklist'>
        {books.map( (book, index)=> {
          return (
            // also rename here // SpecificBook to Book
            <Book key ={book.id} {...book}></Book>
          )
        })}
      </section>
    </>
  );
}


ReactDOM.render(<><BookList /></>, document.getElementById('root'));

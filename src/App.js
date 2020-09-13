import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import Header from './Header/Header';
import InputForm from './InputForm/InputForm';
import Card from './Card/Card';

import _ from 'lodash';

const savedLibrary = JSON.parse(sessionStorage.getItem('library'));

function App() {
  const [library, setLibrary] = useState(_.cloneDeep(savedLibrary) || []);

  useEffect(() => {
    sessionStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  function createBook(book) {
    setLibrary((library) => [...library, book]);
  }

  function destroyBook(book) {
    const index = library.indexOf(book);
    setLibrary((prevLibrary) => {
      const newLibrary = _.cloneDeep(prevLibrary);
      newLibrary.splice(index, 1);
      return newLibrary;
    });
  }

  function toggleRead(book) {
    const index = library.indexOf(book);
    setLibrary((prevLibrary) => {
      const newLibrary = _.cloneDeep(prevLibrary);
      newLibrary[index].read = !newLibrary[index].read;
      return newLibrary;
    });
  }

  return (
    <div className="App">
      <Header />

      <InputForm onSubmit={createBook} />

      {library.map((book, index) => {
        return (
          <Card
            key={index}
            book={book}
            destroyBook={destroyBook}
            toggleRead={toggleRead}
          />
        );
      })}
    </div>
  );
}

export default App;

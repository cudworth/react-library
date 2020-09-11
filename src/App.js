import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InputForm from './InputForm/InputForm';
import Card from './Card/Card';

function App() {
  const [library, setLibrary] = useState([]);
  const [isFormVisible, setFormVisibility] = useState(false);

  function toggleFunction(fn, val) {
    fn((val) => !val);
  }

  function createBook(book) {
    toggleFunction(setFormVisibility, isFormVisible);
    setLibrary((library) => [...library, book]);
  }

  //TODO
  function destroyBook(book) {
    console.log(book);
  }
  //TODO
  function toggleRead(book) {
    console.log(book);
  }

  let inputForm;

  if (isFormVisible) {
    inputForm = <InputForm onSubmit={createBook} />;
  } else {
    inputForm = (
      <input
        type="button"
        value="Create Book"
        onClick={() => toggleFunction(setFormVisibility, isFormVisible)}
      ></input>
    );
  }

  return (
    <div className="App">
      <Header />
      <hr />

      {inputForm}

      <hr />
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

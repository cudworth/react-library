import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InputForm from './InputForm/InputForm';
import Card from './Card/Card';

const bookData = {
  title: null,
  author: null,
  pages: null,
  read: null,
};

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <Card />
    </div>
  );
}

export default App;

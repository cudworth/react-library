import React from 'react';
import './Card.css';

function Card(props) {
  const { title, author, pages, read } = props.book;
  return (
    <div className="Card">
      <div>Title: {title}</div>
      <div>Author: {author}</div>
      <div>Pages: {pages}</div>
      <div>Read: {read ? 'Yes' : 'No'}</div>
      <div className="Card-buttons">
        <input
          type="button"
          value="Mark Read"
          onClick={() => props.toggleRead(props.book)}
        ></input>
        <input
          type="button"
          value="Delete"
          onClick={() => props.destroyBook(props.book)}
        ></input>
      </div>
    </div>
  );
}

export default Card;

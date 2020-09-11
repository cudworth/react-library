import React from 'react';
import './Card.css';

function Card(props) {
  const { title, author, pages, read } = props.book;
  return (
    <div className="Card">
      <input
        type="button"
        value="Remove"
        onClick={() => props.destroyBook(props.book)}
      ></input>
      <input
        type="button"
        value="Toggle Read"
        onClick={() => props.toggleRead(props.book)}
      ></input>
      <span>Title: {title}</span>
      <span>Author: {author}</span>
      <span>Pages: {pages}</span>
      <span>Read: {read ? 'Yes' : 'No'}</span>
    </div>
  );
}

export default Card;

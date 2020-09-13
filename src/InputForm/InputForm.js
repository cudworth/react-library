import React, { useState } from 'react';
import './InputForm.css';

function InputForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [read, setRead] = useState(false);

  return (
    <div className="InputForm">
      <form>
        <div>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="title">Title</label>
        </div>

        <div>
          <input
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <label htmlFor="author">Author</label>
        </div>

        <div>
          <input
            name="pages"
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          ></input>
          <label htmlFor="pages">Pages</label>
        </div>

        <div>
          <input
            name="read"
            type="checkbox"
            value={read}
            onChange={(e) => setRead(e.target.checked)}
          ></input>
          <label htmlFor="read">Read</label>
        </div>

        <input
          type="submit"
          value="Add Book"
          onClick={(e) => {
            e.preventDefault();
            props.onSubmit({ title, author, pages, read });
          }}
        ></input>
      </form>
    </div>
  );
}

export default InputForm;

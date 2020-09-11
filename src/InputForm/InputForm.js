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
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="pages">Pages</label>
          <input
            name="pages"
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="read">Read</label>
          <input
            name="read"
            type="checkbox"
            value={read}
            onChange={(e) => setRead(e.target.checked)}
          ></input>
        </div>

        <input
          type="submit"
          value="Submit"
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

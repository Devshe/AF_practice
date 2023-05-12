import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";

const BookForm = () => {
  const { books, addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, publicationDate, availableCopies);
    setTitle("");
    setAuthor("");
    setPublicationDate("");
    setAvailableCopies("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="publication Date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="available Copies"
          value={availableCopies}
          onChange={(e) => setAvailableCopies(e.target.value)}
          required
        />
        <button type="submit">Add book</button>
      </form>
      {/* <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default BookForm;

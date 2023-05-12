import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../../context/BookContext";

const BookEdit = () => {
  const { id } = useParams();
  const { books, editBook } = useContext(BookContext);
  const book = books.find((book) => book.id === parseInt(id));

  const [bookData, setBookData] = useState({
    id: "",
    title: "",
    author: "",
    publicationDate: "",
    availableCopies: "",
  });

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publicationDate, setPublicationDate] = useState(book.publicationDate);
  const [availableCopies, setAvailableCopies] = useState(book.availableCopies);

  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === Number(id));
    setBookData(bookToEdit);
  }, [books, id]);

  const handleInputChange = (event) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookData.title);
    console.log(book.title);
    console.log("blehhh");
    console.log(title);
    editBook(
      book.id,
      title,
      author,
      bookData.publicationDate,
      book.availableCopies
    );
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={book.id}
            onChange={(event) => {
              handleInputChange;
            }}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Publication Date:
          <input
            type="date"
            name="publicationDate"
            value={publicationDate}
            onChange={(event) => setPublicationDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          Available Copies:
          <input
            type="number"
            name="availableCopies"
            value={book.availableCopies}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;

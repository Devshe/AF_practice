import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookContextProvider, { BookContext } from "../../context/BookContext";

const BookDetail = () => {
  const { id } = useParams();
  const { books, borrowBook, returnBook } = useContext(BookContext);
  const book = books.find((book) => book.id === parseInt(id));

  useEffect(() => console.log(books), []); //

  return (
    <div>
      <h2>Book Detail</h2>
      {book ? (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Publication Date: {book.publicationDate}</p>
          <p>Available Copies: {book.availableCopies}</p>
          <button onClick={() => borrowBook(book.id)}>Borrow</button>
          <button onClick={() => returnBook(book.id)}>Return</button>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default BookDetail;

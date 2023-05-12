import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationDate: "July 16, 1951",
      availableCopies: 3,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationDate: "July 11, 1960",
      availableCopies: 1,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      publicationDate: "June 8, 1949",
      availableCopies: 5,
    },
  ]);

  const addBook = (title, author, publicationDate, availableCopies) => {
    setBooks([
      ...books,
      { id: books.length + 1, title, author, publicationDate, availableCopies },
    ]);
  };

  const editBook = (id, title, author, publicationDate, availableCopies) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { id, title, author, publicationDate, availableCopies };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const borrowBook = (id) => {
    const borrowedBooks = books.map((book) => {
      if (book.id === id && book.availableCopies > 0) {
        return { ...book, availableCopies: book.availableCopies - 1 };
      }
      return book;
    });
    setBooks(borrowedBooks);
  };

  const returnBook = (id) => {
    const returnedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, availableCopies: book.availableCopies + 1 };
      }
      return book;
    });
    setBooks(returnedBooks);
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, editBook, deleteBook, borrowBook, returnBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

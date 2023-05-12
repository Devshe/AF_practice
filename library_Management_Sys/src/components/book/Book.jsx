import React, { useContext } from "react";
import BookContextProvider, { BookContext } from "../../context/BookContext";
import { Link } from "react-router-dom";

const Book = () => {
  const { books, deleteBook } = useContext(BookContext);

  return (
    <div>
      <h2> Books </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Date</th>
            <th>availableCopies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationDate}</td>
              <td>{book.availableCopies}</td>
              <td>
                <button>
                  <Link to={`/edit-book/${book.id}`}>Edit</Link>
                </button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button>
                  <Link
                    to={`/book-detail/${book.id}`}
                    state={
                      (book.id,
                      book.title,
                      book.author,
                      book.publicationDate,
                      book.availableCopies)
                    }
                  >
                    View
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Book;

import React from "react";
import BookContextProvider from "../context/BookContext";
import Book from "../components/book/Book";
import { Link } from "react-router-dom";

function Books() {
  return (
    <main>
      <div>
        <h2> Book Page</h2>
        <Book />
        <div>
          <button>
            <Link to={`/add-book`}> Add book </Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Books;

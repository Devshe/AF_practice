import React from "react";
import BookContextProvider from "../context/BookContext";
import Book from "../components/book/Book";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <div>
          <Book />
        </div>
      </div>
    </div>
  );
};

export default Home;

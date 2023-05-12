import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookDetail from "../components/book/BookDetail";
import Books from "../pages/Books";
import BookContextProvider from "../context/BookContext";
import BookForm from "../components/book/Bookform";
import BookEdit from "../components/book/BookEdit";

const IndexRoute = () => {
  return (
    <BookContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-detail/:id" element={<BookDetail />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/edit-book/:id" element={<BookEdit />} />
      </Routes>
    </BookContextProvider>
  );
};
export default IndexRoute;

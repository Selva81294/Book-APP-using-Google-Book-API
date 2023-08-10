import React, { useState } from "react";
import bookImg from "../Images/bookImg.png";
import "./style.css";
import CardContainer from "./CardContainer";
import axios from "axios";

const MainContainer = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            If you don’t like to read, <br />
            you haven’t found the right book.
          </h1>
        </div>
        <div  className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <img src={bookImg} alt="" />
        </div>
      </div>
      <div className="container">
        <CardContainer book={bookData} />
      </div>
    </>
  );
};

export default MainContainer;

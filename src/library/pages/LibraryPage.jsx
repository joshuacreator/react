import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { searchBooks } from "../services/apiService";
import { BookCard } from "../components/BookCard";

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);

      try {
        const results = await searchBooks("popular");
        setBooks(results);
        console.log(books);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        console.log(books);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <div class="hero-image">
        <div class="hero-text">
          <div>
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Search books"
            />
          </div>
        </div>
      </div>

      <div className="book-grid">
        {isLoading ? (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          books.map((book) => (
            <BookCard
              img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              title={book.title}
              author={book.author_name}
              year={book.publish_year[0]}
              key={book.isbn}
            />
          ))
        )}
      </div>
      {/* <div className="book-grid"> */}
      {/* {books.map((book) => ( */}
      {/* <div key={book.isbn} className="card"> */}
      {/* {" "} */}
      {/* <a key={book.isbn} href={`/library/${book.isbn}`}> */}
      {/* <img className="card-img-top" */}
      {/* src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} */}
      {/* alt={book.title} */}
      {/* /> */}
      {/* <div className="card-body"> */}
      {/* <p>{book.title}</p> */}
      {/* <span>Year: {book.Year}</span> */}
      {/* </div> */}
      {/* </a> */}
      {/* </div> */}
      {/* ))} */}
      {/* </div> */}
    </div>
  );
};

export default LibraryPage;

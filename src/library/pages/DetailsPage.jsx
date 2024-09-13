import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/apiService";
import { BallTriangle } from "react-loader-spinner";
import { BookCard } from "../components/BookCard";

const BookDetailsPage = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookData = await getBookDetails(isbn);
      setBook(bookData);
      console.log(book);
    };
    fetchBookDetails();
  }, [isbn]);

  if (!book) {
    return (
      <div className="loader">
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
      </div>
    );
  }

  return (
    <div>
      <div class="hero-image">
        <div class="hero-text">
          <h1>{book.title}</h1>
        </div>
      </div>

      <div className="body">
        <div className="book-details-card">
          <div className="book-img">
            {/* <h1>Title of the Book</h1> */}
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
            />
            <h5>Title of the Book</h5>
            <p>Author: {book.author_name}</p>
            <p>Publication Date: {book.publish_year[0]}</p>
            {/* <p>Summary: Summary of the Book</p> */}
          </div>

          <div className="book-info">
            <h3>Book summary</h3>
            <p>This is the summary of the Book</p>
            {/* <div className="book-info-row">
              <p className="summary-text">by Author of the Book</p>
              <p className="summary-text">Year: Year of the Book</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="more-title">
        <h1>More books from Author name</h1>
      </div>
      <div className="book-grid">
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
        <BookCard
          // img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          img={"/assets/images/film.png"}
          title={"book.title"}
          author={"book.author_name"}
          year={"book.publish_year[0]"}
          key={"book.isbn"}
        />
      </div>
      {/* <div className="book-details-card">
        <div className="book-img">
          <h1>{book.title}</h1>
          <img src={book.cover} alt={book.title} />
          <p>Author: {book.author}</p>
          <p>Publication Date: {book.publish_date}</p>
          <p>Summary: {book.description}</p>
        </div>

        <div className="book-info">
          <h1>Book info</h1>
          <p>{book.description}</p>
          <div className="book-info-row">
            <p className="summary-text">by {book.author}</p>
            <p className="summary-text">Year: {book.year}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BookDetailsPage;

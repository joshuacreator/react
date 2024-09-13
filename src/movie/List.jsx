import React, { useEffect, useState } from "react";

import axios from "axios";

const List = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  let config = { headers: { "content-type": "multipart/form-data" } };

  const FetchPupolar = async () => {
    let url = `https://www.omdbapi.com/?apikey=6be3b297&s=action`;

    await axios
      .get(url, config)
      .then((result) => {
        if (result.data.length !== 0) {
          setPopular(result.data.Search);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const FetchTopRated = async () => {
    let url = `https://www.omdbapi.com/?apikey=6be3b297&s=drama`;

    await axios
      .get(url, config)
      .then((result) => {
        if (result.data.length !== 0) {
          setTopRated(result.data.Search);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    FetchPupolar();
    FetchTopRated();
  }, []);

  return (
    <div>
      <div className="topbar">
        <div className="search-area">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
          />
          <span className="white">x</span>
        </div>
        <div className="search-wrapper">
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
          <a href="#">
            Movie title <span>2024</span>
          </a>
        </div>
      </div>

      <div className="main-content">
        <h1 className="white">Comedy</h1>

        <div className="movie-container">
          {popular &&
            popular.map((ls, index) => (
              <div className="card-wrapper" key={index}>
                <img src={ls.Poster} alt="Movie image" />
                <h5>{ls.Title}</h5>
                <span>Year: {ls.Year}</span>

                <div className="rating">
                  <span>100</span>
                </div>
              </div>
            ))}
        </div>

        <h1 className="white">Action</h1>

        <div className="movie-container">
          {topRated &&
            topRated.map((ls, index) => (
              <div className="card-wrapper" key={index}>
                <img src={ls.Poster} alt="Movie image" />
                <h5>{ls.Title}</h5>
                <span>Year: {ls.Year}</span>

                <div className="rating">
                  <span>100</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;

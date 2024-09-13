import React from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search for books" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;

// import React, { useState } from "react";

// function SearchBar({ setSearchQuery }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     setSearchQuery(query);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;

import axios from "axios";

const apiBaseUrl = "https://openlibrary.org";

export const searchBooks = async (query) => {
  const response = await axios.get(`${apiBaseUrl}/search.json?q=${query}`);
  // console.log(`Search books: ${response.data.docs}`);
  return response.data.docs;
};

export const getBookDetails = async (isbn) => {
  const response = await axios.get(`${apiBaseUrl}/books/${isbn}.json`);
  // console.log(`getBookDetails: ${response.data.docs}`);
  return response.data;
};

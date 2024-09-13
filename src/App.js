import "./css/custom.css";
import "./css/style.css";
import "./css/Library.css";
import Contact from "./directory/contact";
import List from "./movie/List";
import LibraryPage from "./library/pages/LibraryPage";
import DetailsPage from "./library/pages/DetailsPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/library" element={<LibraryPage />} />

          <Route path="/books/:isbn" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

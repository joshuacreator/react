import "./css/custom.css";
import "./css/style.css";
import "./css/Library.css";
import Contact from "./directory/contact";

import List from "./movie/List";

import LibraryPage from "./library/pages/LibraryPage";
import DetailsPage from "./library/pages/DetailsPage";

import Home from "./job/Pages/Home.jsx";
import JobList from "./job/Pages/JobList.jsx";
import JobDetails from "./job/Pages/JobDetail.jsx";
import Resume from "./job/Pages/Resume.jsx";
import Profile from "./job/Pages/Profile.jsx";
import PostResume from "./job/Pages/PostResume.jsx";
import JobPost from "./job/Pages/JobPost.jsx";
import EditResume from "./job/Pages/EditResume.jsx";
import ProfileDetails from "./job/Pages/ProfileDetails.jsx";
import BookMark from "./job/Pages/BookMarks.jsx";
import AppliedJob from "./job/Pages/AppliedJobs.jsx";
import DeleteAccount from "./job/Pages/DeleteAccount";
import Signup from "./job/Pages/Signup.jsx";
import Signin from "./job/Pages/Signin.jsx";

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

          <Route path="/home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

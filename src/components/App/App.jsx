import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          {/* Add Movie page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

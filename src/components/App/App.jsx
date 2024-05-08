import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Typography variant="h1" sx={{bgcolor:"black", color:"white"}}>The Movies Saga!</Typography>
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

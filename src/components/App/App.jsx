import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from '../MovieList/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList/>} />
        {/* Details page */}

        {/* Add Movie page */}
        </Routes>     
      </Router>
    </div>
  );
}

export default App;

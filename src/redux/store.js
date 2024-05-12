import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('GET_DETAILS', fetchThisGenres);
  yield takeEvery('UPDATE_MOVIE', updateMovie)
}

function* fetchThisGenres(action) {
  const id = action.payload;
  try{
    const response = yield axios.get(`/api/junction/${id}`);
    yield put ({ type:"SET_GENRES", payload:response.data });
    yield put({ type:"FETCH_MOVIES"});
  } catch(err) {
    console.error("Genre fetch error:", err);
  }
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* updateMovie(action) {
  try{
    const id = action.payload.id;
    const title = action.payload.title;
    const description = action.payload.description;
    const body = {title:title, description:description};
    yield axios.put(`/api/movies/${id}`, body );
    yield put ({
      type:"FETCH_MOVIES",
    })
  } catch(error) {
    console.log('updateMovie error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const activeGenres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = configureStore({
  reducer: {
    movies,
    activeGenres,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(sagaMiddleware, logger);
  },
});

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;

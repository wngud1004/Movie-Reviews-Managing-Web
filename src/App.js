import logo from './logo.svg';
import './App.css';
import React from 'react';
import MovieManager from './MovieManager';
import { MovieProvider } from './context/MovieContext';


function App() {
  return (
  <MovieProvider>
    <MovieManager />
  </MovieProvider>
  );
}

export default App;

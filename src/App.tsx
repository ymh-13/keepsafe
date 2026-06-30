import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { movies as initialMovies } from "./data/Movies";
import { useEffect, useState } from "react";
import AddEntryModal from "./components/AddEntryModal";
import AddButton from "./components/AddButton";
import "./styles/App.css";

type MovieEntry = {
  id: number;
  title: string;
  rating: number;
  date: string;
  group: string;
  type: string;
  genre: string;
  mood: string;
  notes: string;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [movieList, setMovieList] = useState<MovieEntry[]>(() => {
  const savedMovies = localStorage.getItem("movies");

  if (savedMovies) {
    return JSON.parse(savedMovies);
  }

  return initialMovies;
});

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  function handleAddMovie(newMovie: MovieEntry) {
    setMovieList((currentMovies) => [...currentMovies, newMovie]);
    setIsOpen(false);
  }

  return (
    <>
      <Navbar />
      <Hero />

      <main className="app-main">
        <section className="movie-grid">
          {movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie_title={movie.title}
              movie_rating={movie.rating}
              movie_date={movie.date}
              movie_group={movie.group}
              movie_type={movie.type}
              movie_genre={movie.genre}
              movie_mood={movie.mood}
              movie_notes={movie.notes}
            />
          ))}
        </section>
      </main>

      <AddButton onClick={() => setIsOpen(true)} />

      {isOpen && (
        <AddEntryModal
          onClose={() => setIsOpen(false)}
          onAddMovie={handleAddMovie}
        />
      )}
    </>
  );
}

export default App;
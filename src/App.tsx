import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/Movies";
import { useState } from "react";
import AddEntryModal from "./components/AddEntryModal";
import AddButton from "./components/AddButton";
import "./styles/App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />

      <Hero />

      <main className="app-main">

        <section className="movie-grid">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie_title={movie.title}
              movie_rating={movie.rating}
              movie_date={movie.date}
              movie_group={movie.group}
            />

          ))}

        </section>

      </main>


      <AddButton 
        onClick={() => setIsOpen(true)}
      />


      {isOpen && (
      <AddEntryModal 
      onClose={() => setIsOpen(false)}
      />
      )}

    </>
  );
}

export default App;
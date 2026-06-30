import "../styles/MovieCard.css";
import { useState } from "react";

interface MovieCardProps {
  movie_title: string;
  movie_rating: number;
  movie_date: string;
  movie_group: string;
  movie_type: string;
  movie_genre: string;
  movie_mood: string;
  movie_notes: string;
}

function MovieCard({
  movie_title,
  movie_rating,
  movie_date,
  movie_group,
  movie_type,
  movie_genre,
  movie_mood,
  movie_notes,
}: MovieCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`movie-card ${isFlipped ? "flipped" : ""} ${
        movie_type === "series" ? "series-card" : "movie-card-type"
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {!isFlipped ? (
        <>
          <div className="movie-poster">Poster</div>
          <p className="movie-type">{movie_type}</p>
          <h2 className="movie-title">{movie_title}</h2>
          <p className="movie-genre">{movie_genre}</p>
          <p className="movie-rating">{movie_rating}/5</p>
          <p className="movie-date">📅 {movie_date}</p>
          <p className="movie-friends">👥 {movie_group}</p>
        </>
      ) : (
        <>
          <h2 className="movie-title">Mood</h2>
          <p className="movie-mood">{movie_mood || "No mood added"}</p>

          <h2 className="movie-title">Memory</h2>
          <p className="movie-notes">{movie_notes || "No comment yet"}</p>
        </>
      )}
    </div>
  );
}

export default MovieCard;
import { useState } from "react";
import "../styles/AddEntryModal.css";

type NewMovie = {
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

type AddEntryModalProps = {
  onClose: () => void;
  onAddMovie: (movie: NewMovie) => void;
};


function AddEntryModal({ onClose, onAddMovie }: AddEntryModalProps) {
  const [type, setType] = useState("movie");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");
  const [group, setGroup] = useState("");

    function handleSave() {
    const newMovie = {
        id: Date.now(),
        title,
        rating: Number(rating),
        date: date || "Unknown date",
        group,
        type,
        genre,
        mood,
        notes,
    };

    onAddMovie(newMovie);
    }

  return (
    <div className="modal-overlay">
      <div className={`modal ${type === "series" ? "modal-series" : "modal-movie"}`}>
        <h2>Add Memory</h2>

        <div className="type-toggle">
          <button className={type === "movie" ? "active" : ""} onClick={() => setType("movie")}>
            Movie
          </button>

          <button className={type === "series" ? "active" : ""} onClick={() => setType("series")}>
            Series
          </button>
        </div>

        <input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input placeholder="Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
        <input placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)} />
        <input placeholder="With" value={group} onChange={(event) => setGroup(event.target.value)} />
        <input placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)} />
        <input placeholder="Mood" value={mood} onChange={(event) => setMood(event.target.value)} />

        <textarea
          placeholder="Comment"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddEntryModal;
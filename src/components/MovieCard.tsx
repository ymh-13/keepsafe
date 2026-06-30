import "../styles/MovieCard.css";
interface MovieCardProps {
    movie_title: string;
    movie_rating: number;
    movie_date: string;
    movie_group: string;
};
function MovieCard({
    movie_title,
    movie_rating,
    movie_date,
    movie_group,
}: MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="movie-poster">Poster</div>
            <h2 className="movie-title">{movie_title}</h2>
            <p className="movie-rating">{movie_rating}/5</p>
            <p className="movie-date">📅 {movie_date}</p>
            <p className="movie-friends">👥{movie_group}</p>
        </div>
    )
}
export default MovieCard;

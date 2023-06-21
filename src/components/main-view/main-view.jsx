import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Avengers:Endgame",
            description: "Avengers assemble once more to defeat Thanos and to restore the Universe and balance to the world.",
            genre: "Action",
            director: "Anthony Russo",
    },
    {
        id: 2,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        genre: "Action",
        director: "Christopher Nolan",
    },
    {
        id: 3,
        title: "Spider-Man: No way Home",
        description: "Spider man has got his identity revealed and got help from Doctor Strange. A spell went wrong and dangerous enemies from other worlds start to appear where Peter learns what it means to be Spider-Man.",
        genre: "Action",
        director: "Jon Watts"
    }
]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }
    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }}
                />
            ))}
        </div>
    );
};
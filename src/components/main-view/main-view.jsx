import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id:1,
            Title: "Avengers:Endgame",
            Description: "Avengers assemble once more to defeat Thanos and to restore the Universe and balance to the world.",
            Genre: "Action",
            Director: "Anthony Russo",
            Image: "https://www.google.com/search?rlz=1C5CHFA_enCA913CA913&sxsrf=APwXEde_XHWZ-sTNQL0e2C_yzJJo7uEBkw:1687363050549&q=avengers+endgame&tbm=isch&sa=X&ved=2ahUKEwj2tfCZ3dT_AhV0IH0KHSEsA_AQ0pQJegQIDRAB&biw=1440&bih=702&dpr=2#imgrc=4K2BvVWQhfuweM"
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
import PropTypes from "prop-types";

export const MovieCard = ({ movie,onMovieClick }) => {
    return (
        <div 
        onClick={() => {
            onMovieClick(movie);
        }}
        >
            {movie.title}
        </div>
    );
};

MovieCard.propTypes = {
    movie:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        genre:PropTypes.shape({
            Name: PropTypes.string,
            Description: PropTypes.string,
        }),
        director:PropTypes.shape({
            Name: PropTypes.string,
            Bio: PropTypes.string,
            Birth: PropTypes.string
        }),
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
    }; 
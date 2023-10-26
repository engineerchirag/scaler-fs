import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const loadMovies = async() => {
        const response = await fetch('http://localhost:5050/api/movie/list?type=ALL');
        const movieList = await response.json();
        setMovies(movieList);
    }

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <ul role="list" className="flex-auto divide-y divide-gray-100">
            {
                movies.map((movie => (
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={movie.thumbnail} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900"><Link to={`/movies/${movie._id}`}>{movie.title}</Link></p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{movie.description}</p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Rating: {movie.rating}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">Genres: {movie.genre}</p>
                        </div>
                    </li>
                )))
            }
        </ul>
    )
}

export default MovieList;
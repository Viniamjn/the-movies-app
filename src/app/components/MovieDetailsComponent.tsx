import React, {FC} from 'react';
import {IMovie, MovieGenres} from "@/app/models/IMovie";
import styles from '../styles/MovieDetail.module.css'

type Props={
    movie:IMovie;
}
const MovieDetailsComponent:FC<Props> = ({movie}) => {
    return (
        <div className={styles.container}>
            <div className={styles.posterWrapper}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.poster}
                />
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{movie.title}</h1>
                <div className={styles.info}>
                    <p>
                        <strong>Release Date:</strong> {movie.release_date}
                    </p>
                    <p>
                        <strong>Duration:</strong> {movie.runtime} min
                    </p>
                    <p>
                        <strong>Genres:</strong>{" "}
                        {movie.genres.map((genre: MovieGenres) => (
                            <span key={genre.id} className={styles.genre}>
                                {genre.name}
                            </span>
                        ))}
                    </p>
                </div>
                <p className={styles.overview}>{movie.overview}</p>
            </div>
        </div>
    );
};
export default MovieDetailsComponent;
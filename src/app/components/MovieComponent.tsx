import Link from "next/link";
import { IMovie } from "@/app/models/IMovie";
import styles from "../styles/MoviesList.module.css";

type MovieComponentProps ={
    movies: IMovie[];
}

const MovieComponent = ({ movies }: MovieComponentProps) => {
    if (!movies || movies.length === 0) {
        return <div>No movies available</div>;
    }

    return (
        <div className={styles.container}>
            {movies.map((movie: IMovie) => (
                <Link href={`/movies/${movie.id}`} key={movie.id}>
                    <div className={styles.card}>
                        <img
                            className={styles.poster}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieComponent;

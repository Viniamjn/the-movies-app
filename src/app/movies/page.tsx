"use client";
import React, { useEffect, useState } from "react";
import { getPopularMovies } from "@/app/api_service/FetchService";
import { IMovie } from "@/app/models/IMovie";
import MovieComponent from "@/app/components/MovieComponent";
import PaginationComponents from "@/app/components/PaginationComponents";
import usePagination from "@/app/hooks/usePagination";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const { currentPage, handlePageChange } = usePagination(totalPages);

    useEffect(() => {
        if (currentPage) {
            const fetchMovies = async () => {
                try {
                    const { results, total_pages } = await getPopularMovies(currentPage);
                    setMovies(results);
                    console.log(results);
                    setTotalPages(total_pages);
                } catch (error) {
                    console.error("Error fetching movies:", error);
                }
            };
            fetchMovies();
        }
    }, [currentPage]);

    if (!currentPage) return <div>Loading...</div>;

    return (
        <div>
            <MovieComponent movies={movies} />
            <PaginationComponents
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default MoviesPage;

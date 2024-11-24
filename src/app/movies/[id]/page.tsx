import React from 'react';
import { getMovie } from '@/app/api_service/FetchService';
import MovieDetailsComponent from "@/app/components/MovieDetailsComponent";


type Params = Promise<{ id: string }>;

const MoviePage = async ({ params }: { params: Params }) => {
    const { id } = await params;
    const movie = await getMovie(id);

    return (
        <div>
            <MovieDetailsComponent movie={movie} />
        </div>
    );
};

export default MoviePage;

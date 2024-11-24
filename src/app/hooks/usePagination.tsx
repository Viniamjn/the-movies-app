import { useState, useEffect } from "react";

const usePagination = (totalPages: number) => {
    const [currentPage, setCurrentPage] = useState<number | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const pageFromURL = searchParams.get("page");
        const page = pageFromURL && !isNaN(Number(pageFromURL)) ? Number(pageFromURL) : 1;
        setCurrentPage(page);
    }, []);

    useEffect(() => {
        if (currentPage) {
            const url = new URL(window.location.href);
            url.searchParams.set("page", currentPage.toString());
            window.history.pushState({}, "", url.toString());
        }
    }, [currentPage]);

    const handlePageChange = (direction: "prev" | "next") => {
        setCurrentPage((prev) => {
            if (!prev) return null;

            if (direction === "next" && prev < totalPages) return prev + 1;
            if (direction === "prev" && prev > 1) return prev - 1;

            return prev;
        });
    };

    return { currentPage, handlePageChange };
};

export default usePagination;

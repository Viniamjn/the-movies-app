import React, { FC } from "react";
import styles from '../styles/Pagination.module.css'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (direction: "prev" | "next") => void;
};

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const onClickPreviousHandler = () => {
        onPageChange("prev");
    };
    const onClickNextHandler=()=>{
        onPageChange("next")
    }
    return (
        <div className={styles.paginationContainer}>
            <button
                className={`${styles.button} ${currentPage === 1 ? styles.disabled : ""}`}
                onClick={onClickPreviousHandler}
                disabled={currentPage === 1}
            >
                <span className={styles.arrow}>&larr;</span>
            </button>
            <span className={styles.pageInfo}>{currentPage}</span>
            <button
                className={`${styles.button} ${currentPage === totalPages ? styles.disabled : ""}`}
                onClick={onClickNextHandler}
                disabled={currentPage === totalPages}
            >
               <span className={styles.arrow}>&rarr;</span>
            </button>
        </div>
    );
};

export default Pagination;

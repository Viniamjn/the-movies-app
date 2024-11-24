"use client";

import React, { useState } from 'react';
import SearchInput from './SearchComponent';
import styles from '../styles/Header.module.css'

const Header = () => {
    const [query, setQuery] = useState('');
    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // Ти можеш додати функціональність для пошуку фільмів тут
        console.log('Searching for:', query);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="#" alt="Logo" width={100} height={40} />
            </div>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <SearchInput query={query} setQuery={setQuery} />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
        </header>
    );
};


export default Header;
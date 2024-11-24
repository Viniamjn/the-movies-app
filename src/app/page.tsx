import Link from "next/link";
import styles from './home_page.module.css';
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to MovieZone</h1>
                <p className={styles.subtitle}>Discover the most popular movies with ease!</p>
                <Link href="/movies">
                    <button className={styles.button}>Explore Movies</button>
                </Link>
            </div>
        </div>
    );
}
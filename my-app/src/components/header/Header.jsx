import styles from './Header.module.scss';

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <h1>
                    Create App
                </h1>
                <p>description</p>
            </header>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/catalog">Catalog</a>
                <a href="/about">About</a>
                <a href="/catalog_api">Catalog Api</a>
            </nav>
        </div>
    );
}

export default Header;
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
                <a href="#">One</a>
                <a href="#">Two</a>
                <a href="#">Three</a>
            </nav>
        </div>
    );
}

export default Header;
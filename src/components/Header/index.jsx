import styles from './styles.module.css'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div>

                <h1 className={styles.title}>
                    Menu Semanal
                </h1>

                <a className={styles.ancora}>
                    Recursos
                </a>

            </div>
        </header>
    );
}
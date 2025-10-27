import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.title}>Menu Semanal</h1>

            <a src="./Features" className={styles.ancora}>
                Recursos
            </a>
        </header>
    );
}

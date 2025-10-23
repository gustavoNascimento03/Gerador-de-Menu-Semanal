import styles from './styles.module.css'

export function Botao({children}) {
    return (
        <button className={styles.botaoGenerico}>
            {children}
        </button>
    );
}
import styles from './styles.module.css'

export function Explorer() {
    return (
        <section className={styles.sectionGeral}>
            <div className={styles.containerGeral}>
                <h3 className={styles.titulo}>
                    Pronto para simplificar sua rotina?
                </h3>

                <p className={styles.paragrafo}>
                    Deixe a criatividade na cozinha por nossa conta e ganhe mais tempo para você.
                </p>

                <div className={styles.containerButton}>
                    <a className='botao'>Começar agora!</a>
                </div>
            </div>
        </section>
    );
}

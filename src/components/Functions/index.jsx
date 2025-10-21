import styles from './styles.module.css'

export function Functions() {
    return (
        <section className={styles.funcoes}>
            <div className={styles.containerGeral}>
                <div className={styles.containerTitulo}>
                    <h3 className={styles.titulo}>Como Funciona? É simples.</h3>
                </div>

                <div className={styles.containerPassos}>
                    {/* Passo 1 */}
                    <div className={styles.passos}>
                        <div className={styles.passoNumero}>1</div>
                        <h4 className={styles.passoTitulo}>Defina sua Preferência</h4>
                        <p className={styles.passoDescr}>Escolha entre os modos vegano, vegetariano ou sem restrições.</p>
                    </div>

                    {/* Passo 2 */}
                    <div className={styles.passos}>
                        <div className={styles.passoNumero}>2</div>
                        <h4 className={styles.passoTitulo}>Gere seu Cardápio</h4>
                        <p className={styles.passoDescr}>Receba um plano completo para a semana toda em um instante.</p>
                    </div>

                    {/* Passo 3 */}
                    <div className={styles.passos}>
                        <div className={styles.passoNumero}>3</div>
                        <h4 className={styles.passoTitulo}>Leve para o Mercado</h4>
                        <p className={styles.passoDescr}>Com um clique, sua lista de compras está pronta para ser usada.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

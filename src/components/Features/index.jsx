import styles from './styles.module.css'

export function Features() {
    return (
        <section id='features' className={styles.featuresSection}>
            <div className={styles.containerGeral}>
                <div className={styles.campoTextoTerceiro}>
                    <h3 className={styles.textoTerceiro}>
                        Tudo que você precisa em um só lugar
                    </h3>

                    <p className={styles.paragrafoTerceiro}>
                        Funcionalidades pensadas para simplificar sua vida na cozinha.
                    </p>
                </div>

                <div className={styles.containerFeatures}>
                    {/* <!-- Feature 1 --> */}
                    <div className={styles.featuresCampo}>
                        <div className={styles.featuresCampTexto}>
                            <svg className={styles.featuresImagem}></svg>
                        </div>
                        <h4 className={styles.textoQuarto}>
                            Para seu Estilo de Vida
                        </h4>

                        <p className={styles.paragrafoQuarto}>
                            Funcionalidades pensadas para simplificar sua vida na cozinha.
                        </p>
                    </div>

                    {/* <!-- Feature 2 --> */}
                    <div className={styles.featuresCampo}>
                        <div className={styles.featuresCampTexto}>
                            <svg className={styles.featuresImagem}></svg>
                        </div>
                        <h4 className={styles.textoQuarto}>
                            Flexibilidade Total
                        </h4>

                        <p className={styles.paragrafoQuarto}>
                            Não gostou de uma sugestão? Troque qualquer refeição com apenas um clique.
                        </p>
                    </div>

                    {/* <!-- Feature 3 --> */}
                    <div className={styles.featuresCampo}>
                        <div className={styles.featuresCampTexto}>
                            <svg className={styles.featuresImagem}></svg>
                        </div>
                        <h4 className={styles.textoQuarto}>
                            Lista de Compras Inteligente
                        </h4>

                        <p className={styles.paragrafoQuarto}>
                            Gere e copie sua lista de compras da semana, pronta para enviar ou levar ao mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
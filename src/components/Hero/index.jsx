import styles from "./styles.module.css";
import { Botao } from "../../components/Botao";

export function Hero() {
    return (
        <div>
            <main className={styles.heroSection}>
                <h2 className={styles.texto}>
                    Planeje suas refeições{" "}
                    <span className={styles.spamTexto}>sem esforço.</span>
                </h2>

                <p className={styles.paragrafo}>
                    Receba um cardápio semanal personalizado em segundos. Chega
                    de pensar "o que vamos comer hoje?". Nós resolvemos isso
                    para você.
                </p>

                <div className={styles.divAncora}>
                    {/* <a className={styles.ancora} href='#'>
                        Gerar meu cardápio
                    </a> */}
                    <Botao to="/gerador-de-menu-semanal">Gerar meu cardápio</Botao>
                </div>
            </main>
        </div>
    );
}

import styles from './styles.module.css'

export function Hero() {
    return (
        <div>
            <main className='heroSection'>
                <h2 className='texto'>
                    Planeje suas refeições <span className='spamTexto'>sem esforço.</span>
                </h2>

                <p className='paragrafo'>
                    Receba um cardápio semanal personalizado em segundos. Chega de pensar "o que vamos comer hoje?". Nós resolvemos isso para você.
                </p>

                <div className='divAncora'>
                    <a className='ancora' href='#'>
                        Gerar meu cardápio
                    </a>
                </div>

            </main>
        </div>
    );
}
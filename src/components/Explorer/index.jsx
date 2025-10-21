import styles from './styles.module.css'

export function Explorer() {
    return (
        <section className='sectionGeral'>
            <div className='containerGeral'>
                <h3 className='titulo'>
                    Pronto para simplificar sua rotina?
                </h3>

                <p className='paragrafo'>
                    Deixe a criatividade na cozinha por nossa conta e ganhe mais tempo para você.
                </p>

                <div className='containerButton'>
                    <a className='botao'>Começar agora!</a>
                </div>
            </div>
        </section>
    );
}
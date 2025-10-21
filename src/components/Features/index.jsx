import styles from './styles.module.css'

export function Header() {
    return (
        <section id='features' className='featuresSection'>
            <div className='containerGeral'>
                <div className='campoTextoTerceiro'>
                    <h3 className='textoTerceiro'>
                        Tudo que você precisa em um só lugar
                    </h3>

                    <p className='paragrafoTerceiro'>
                        Funcionalidades pensadas para simplificar sua vida na cozinha.
                    </p>
                </div>

                <div className='containerFeatures'>
                    {/* <!-- Feature 1 --> */}
                    <div className='featuresCampo'>
                        <div className='featuresCampTexto'>
                            <svg className='featuresImagem'></svg>
                        </div>
                        <h4 className='textoQuarto'>
                            Para seu Estilo de Vida
                        </h4>

                        <p className='paragrafoQuarto'>
                            Funcionalidades pensadas para simplificar sua vida na cozinha.
                        </p>
                    </div>

                    {/* <!-- Feature 2 --> */}
                    <div className='featuresCampo'>
                        <div className='featuresCampTexto'>
                            <svg className='featuresImagem'></svg>
                        </div>
                        <h4 className='textoQuarto'>
                            Flexibilidade Total
                        </h4>

                        <p className='paragrafoQuarto'>
                            Não gostou de uma sugestão? Troque qualquer refeição com apenas um clique.
                        </p>
                    </div>

                    {/* <!-- Feature 3 --> */}
                    <div className='featuresCampo'>
                        <div className='featuresCampTexto'>
                            <svg className='featuresImagem'></svg>
                        </div>
                        <h4 className='textoQuarto'>
                            Lista de Compras Inteligente
                        </h4>

                        <p className='paragrafoQuarto'>
                            Gere e copie sua lista de compras da semana, pronta para enviar ou levar ao mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
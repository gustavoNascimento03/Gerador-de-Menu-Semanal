import styles from './styles.module.css'

export function Functions() {
    return (
        <section className='funcoes'>
            <div className='containerGeral'>
                <div className='containerTitulo'>
                    <h3 className='titulo'>Como Funciona? É simples.</h3>
                </div>

                <div className='containerPassos'>
                    {/* Passo 1 */}
                    <div className='passos'>
                        <div className='passoNumero'>1</div>
                        <h4 className='passoTitulo'>Defina sua Preferência</h4>
                        <p className='passoDescr'>Escolha entre os modos vegano, vegetariano ou sem restrições.</p>
                    </div>

                    {/* Passo 2 */}
                    <div className='passos'>
                        <div className='passoNumero'>2</div>
                        <h4 className='passoTitulo'>Gere seu Cardápio</h4>
                        <p className='passoDescr'>Receba um plano completo para a semana toda em um instante.</p>
                    </div>

                    {/* Passo 3 */}
                    <div className='passos'>
                        <div className='passoNumero'>3</div>
                        <h4 className='passoTitulo'>Leve para o Mercado</h4>
                        <p className='passoDescr'>Com um clique, sua lista de compras está pronta para ser usada.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

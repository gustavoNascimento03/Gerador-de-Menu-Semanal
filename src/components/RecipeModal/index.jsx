import styles from "../../pages/Gerador/styles.module.css";

export function RecipeModal({ recipe, onClose }) {
    return (
        // O 'onClose' no backdrop permite fechar clicando fora
        <div className={styles.modalBackdrop} onClick={onClose}>
            {/* e.stopPropagation() impede que o clique DENTRO feche o modal */}
            <div
                className={`${styles.modalContent} ${styles.modalContentRecipe}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{recipe.nome}</h2>
                    <button className={styles.modalCloseBtn} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div
                    className={`${styles.modalBody} ${styles.recipeContent} ${styles.receitascroll}`}
                >
                    <h3>Ingredientes:</h3>
                    <ul>
                        {recipe.ingredientes.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                    <h3>Modo de Preparo:</h3>
                    <ol>
                        {recipe.preparo.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

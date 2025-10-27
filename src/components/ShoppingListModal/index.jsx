import { useState, useMemo } from "react";
import styles from "../../pages/Gerador/styles.module.css";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ShoppingListModal({ menu, onClose }) {
    const [copyButtonText, setCopyButtonText] = useState("Copiar Lista");

    const aggregatedList = useMemo(() => {
        console.log(
            "Mestre Fullstack: Recalculando a lista de compras... (só deve rodar 1x)"
        );

        const allReceitas = Object.values(menu).flatMap((day) =>
            Object.values(day)
        );
        const allIngredients = allReceitas.flatMap(
            (recipe) => recipe.ingredientes
        );

        const aggregated = {};

        allIngredients.forEach((ing) => {
            const key = ing.trim().toLowerCase();
            aggregated[key] = (aggregated[key] || 0) + 1;
        });

        return aggregated;
    }, [menu]);

    const handleCopyList = () => {
        let textToCopy = "🛒 Lista de Compras da Semana:\n\n";

        Object.entries(aggregatedList).forEach(([name, count]) => {
            textToCopy += `• ${capitalizeFirstLetter(name)} (x${count})\n`;
        });

        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopyButtonText("Copiado! 👍");
                setTimeout(() => setCopyButtonText("Copiar Lista"), 2000);
            })
            .catch((err) => {
                console.error("Falha ao copiar", err);
                setCopyButtonText("Erro ao copiar");
                setTimeout(() => setCopyButtonText("Copiar Lista"), 2000);
            });
    };

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div
                className={`${styles.modalContent} ${styles.modalContentShopping}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>
                        Ingredientes da Semana
                    </h2>
                    <button className={styles.modalCloseBtn} onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className={`${styles.modalBody} ${styles.receitascroll}`}>
                    <ul className={styles.shoppingList}>
                        {Object.entries(aggregatedList).map(([name, count]) => (
                            <li key={name}>
                                {capitalizeFirstLetter(name)} (x{count})
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.modalFooter}>
                    <button
                        className={styles.copyButton}
                        onClick={handleCopyList}
                    >
                        {copyButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

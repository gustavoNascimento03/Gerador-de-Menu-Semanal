import styles from "../../pages/Gerador/styles.module.css";

const ImagemReload = () => (
    <img
        className={styles.iconMealCard}
        src="src\assets\reload.svg"
        alt="Icone de reload"
    ></img>
);

const ImagemCalories = () => (
    <img
        className={styles.iconMealCard}
        src="src\assets\calories.svg"
        alt="Icone de calories"
    ></img>
);

const ImagemUser = () => (
    <img
        className={styles.iconMealCard}
        src="src\assets\user.svg"
        alt="Icone de user"
    ></img>
);

export function MealCard({ title, recipe, onShowRecipe, onReload }) {
    return (
        <li className={styles.mealCard}>
            <h4 className={styles.mealTitle}>{title}</h4>{" "}
            <div className={styles.mealRow}>
                {" "}
                <p
                    className={styles.recipeLink}
                    onClick={() => onShowRecipe(recipe)}
                >
                    {recipe.nome}{" "}
                </p>{" "}
                <div className={styles.mealMeta}>
                    {" "}
                    <span
                        className={styles.metaItem}
                        title={`Serve ${recipe.serves} pessoa(s)`}
                    >
                        {" "}
                        <ImagemUser /> {recipe.serves}{" "}
                    </span>{" "}
                    <span
                        className={styles.metaItem}
                        title={`${recipe.calories} kcal (aprox.)`}
                    >
                        <ImagemCalories /> {recipe.calories}{" "}
                    </span>{" "}
                    <button
                        className={styles.reloadButton}
                        title="Sugerir outra opção"
                        onClick={onReload}
                    >
                        <ImagemReload />{" "}
                    </button>{" "}
                </div>{" "}
            </div>{" "}
        </li>
    );
}

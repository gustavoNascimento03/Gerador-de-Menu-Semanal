import styles from "../../pages/Gerador/styles.module.css";
import { MealCard } from "../MealCard";

export function DayCard({ day, meals, onShowRecipe, onReloadMeal }) {
    return (
        <div className={styles.dayCard}>
            <h3 className={styles.dayTitle}>{day}</h3>
            <ul className={styles.mealsList}>
                <MealCard
                    title="Café da Manhã"
                    recipe={meals.breakfast}
                    onShowRecipe={onShowRecipe}
                    onReload={() => onReloadMeal(day, "breakfast")}
                />
                <MealCard
                    title="Almoço"
                    recipe={meals.lunch}
                    onShowRecipe={onShowRecipe}
                    onReload={() => onReloadMeal(day, "lunch")}
                />
                <MealCard
                    title="Jantar"
                    recipe={meals.dinner}
                    onShowRecipe={onShowRecipe}
                    onReload={() => onReloadMeal(day, "dinner")}
                />
            </ul>
        </div>
    );
}

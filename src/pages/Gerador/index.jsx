import React from "react";
import { Footer } from "../../components/Footer";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { menuData } from "../../data/receitas";
import { Botao } from "../../components/Botao";
import { DayCard } from "../../components/DayCard";
import { RecipeModal } from "../../components/RecipeModal";
import { ShoppingListModal } from "../../components/ShoppingListModal";

const restrictionModes = ["none", "vegetarian", "vegan"];
const restrictionLabels = {
    none: "Sem Restrição",
    vegetarian: "Vegetariano",
    vegan: "Vegano",
};
const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sábado",
    "Domingo",
];

function getFilteredReceitas(allReceitas, restriction) {
    if (restriction === "vegan") return allReceitas.filter((r) => r.vegano);
    if (restriction === "vegetarian")
        return allReceitas.filter((r) => r.vegetariano);
    return [...allReceitas];
}

function getRandomRecipe(recipeList, excludeRecipeName = "") {
    let availableOptions = recipeList.filter(
        (r) => r.nome !== excludeRecipeName
    );
    if (availableOptions.length === 0) availableOptions = recipeList;
    return availableOptions[
        Math.floor(Math.random() * availableOptions.length)
    ];
}

export function Gerador() {
    // --- O ESTADO DO APP ---
    const [menu, setMenu] = useState({}); // Guarda o cardápio da semana
    const [restrictionIndex, setRestrictionIndex] = useState(0); // Guarda a restrição

    const [selectedRecipe, setSelectedRecipe] = useState(null); // 'null' = fechado. Objeto = aberto.
    const [showShoppingList, setShowShoppingList] = useState(false);

    // --- LÓGICA DE GERAÇÃO ---
    function generateWeeklyMenu() {
        const currentRestriction = restrictionModes[restrictionIndex];

        // Filtra as listas UMA VEZ
        const breakfastOptions = getFilteredReceitas(
            menuData.cafeDaManha,
            currentRestriction
        );
        const lunchOptions = getFilteredReceitas(
            menuData.almoco,
            currentRestriction
        );
        const dinnerOptions = getFilteredReceitas(
            menuData.jantar,
            currentRestriction
        );

        const newMenu = {};
        daysOfWeek.forEach((day) => {
            const breakfast = getRandomRecipe(breakfastOptions);
            const lunch = getRandomRecipe(lunchOptions);
            // Evita almoço e janta iguais
            const dinner = getRandomRecipe(dinnerOptions, lunch.nome);

            newMenu[day] = { breakfast, lunch, dinner };
        });
        setMenu(newMenu); // ATUALIZA O ESTADO! O React vai redesenhar a tela.
    }

    // --- HANDLERS (Funções de Clique) ---
    function handleRestrictionClick() {
        const nextIndex = (restrictionIndex + 1) % restrictionModes.length;
        setRestrictionIndex(nextIndex);
        // (O useEffect abaixo vai cuidar de gerar o novo menu)
    }

    function handleReloadMeal(day, mealType) {
        const currentRestriction = restrictionModes[restrictionIndex];
        let recipeList;
        if (mealType === "breakfast")
            recipeList = getFilteredReceitas(
                menuData.cafeDaManha,
                currentRestriction
            );
        if (mealType === "lunch")
            recipeList = getFilteredReceitas(
                menuData.almoco,
                currentRestriction
            );
        if (mealType === "dinner")
            recipeList = getFilteredReceitas(
                menuData.jantar,
                currentRestriction
            );

        const currentRecipeName = menu[day][mealType].nome;
        const newRecipe = getRandomRecipe(recipeList, currentRecipeName);

        // Jeito certo de atualizar estado aninhado (sem "mutar" o original)
        setMenu((prevMenu) => ({
            ...prevMenu,
            [day]: {
                ...prevMenu[day],
                [mealType]: newRecipe,
            },
        }));
    }

    // HANDLERS DO MODAL
    function handleShowRecipe(recipe) {
        setSelectedRecipe(recipe);
    }
    function handleCloseRecipeModal() {
        setSelectedRecipe(null);
    }

    function handleCloseShoppingList() {
        setShowShoppingList(false);
    }

    // --- EFEITOS (Lifecycle) ---

    // Roda UMA VEZ quando o componente carrega
    useEffect(() => {
        generateWeeklyMenu();
    }, []); // Array vazio = roda 1x

    // Roda DE NOVO toda vez que a 'restrictionIndex' mudar
    useEffect(() => {
        generateWeeklyMenu();
    }, [restrictionIndex]);

    // --- O JSX (O que vai pra tela) ---
    return (
        <div className={styles.gradientbg}>
            <header className={styles.header}>
                <h1 className={styles.title}>Cardápio Semanal</h1>
                <p className={styles.subtitle}>
                    Inspiração diária para refeições deliciosas!
                </p>
            </header>

            {/* Nossos botões reutilizáveis! */}
            <div className={styles.controlsGrid}>
                <Botao onClick={generateWeeklyMenu}>Gerar Cardápio</Botao>
                <Botao onClick={handleRestrictionClick}>
                    {restrictionLabels[restrictionModes[restrictionIndex]]}
                </Botao>
                <Botao onClick={() => setShowShoppingList(true)}>
                    Lista de Compras
                </Botao>
            </div>

            {/* Onde a mágica do .map() acontece */}
            <div className={styles.menuContainer}>
                {/* Pega o {menu} do estado e transforma em <DayCard> */}
                {Object.entries(menu).map(([day, meals]) => (
                    <DayCard
                        key={day}
                        day={day}
                        meals={meals}
                        onShowRecipe={handleShowRecipe}
                        onReloadMeal={handleReloadMeal}
                    />
                ))}
            </div>

            {/* --- RENDERIZAÇÃO CONDICIONAL DOS MODAIS --- */}
            {/* Se 'selectedRecipe' NÃO for 'null', renderize o modal */}
            {selectedRecipe && (
                <RecipeModal
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)} // Simplifiquei o handler
                />
            )}

            {/* Se 'showShoppingList' for 'true', renderize o modal */}
            {showShoppingList && (
                <ShoppingListModal
                    menu={menu} // Passa o cardápio inteiro pra ele
                    onClose={handleCloseShoppingList}
                />
            )}
            <Footer />
        </div>
    );
}

export default Gerador;

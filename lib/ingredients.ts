import { Ingredient, MealDbApiRecipe } from "@/types/types";

export function extractIngredients(recipe: MealDbApiRecipe): Ingredient[] {
  const ingredients: Ingredient[] = [];

  for (let index = 1; index <= 20; index += 1) {
    const name = recipe[`strIngredient${index}` as keyof MealDbApiRecipe] as
      | string
      | null;
    const measure = recipe[`strMeasure${index}` as keyof MealDbApiRecipe] as
      | string
      | null;

    if (name && name.trim() !== "") {
      ingredients.push({
        name: name.trim(),
        measure: measure?.trim() || "to taste",
      });
    }
  }

  return ingredients;
}

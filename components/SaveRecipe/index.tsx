"use client";

import { RecipeType } from "@/types/types";
import { useUserContext } from "@/contexts/userContext";

const SaveRecipe = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  const { user, toggleSavedRecipe } = useUserContext();
  const isSaved = !!user?.recipes.some((recipe) => recipe.idMeal === idMeal);

  return (
    <button
      type="button"
      onClick={() => toggleSavedRecipe({ idMeal, strMeal, strMealThumb })}
      className={`rounded-md px-5 py-2.5 font-medium transition-colors ${
        isSaved
          ? "bg-herb text-paper hover:bg-herb-dark"
          : "bg-brick text-paper hover:bg-brick-dark"
      }`}
    >
      {isSaved ? "Saved \u2713 (click to remove)" : "Save recipe"}
    </button>
  );
};

export default SaveRecipe;

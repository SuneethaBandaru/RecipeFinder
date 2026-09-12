"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RecipeType } from "@/types/types";
import { fetchRandomMeal } from "@/lib/mealdb";

const GuestPreview = () => {
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadPreview = async () => {
      const results = await Promise.all([
        fetchRandomMeal(),
        fetchRandomMeal(),
        fetchRandomMeal(),
      ]);
      if (!cancelled) {
        setRecipes(results.filter((meal): meal is RecipeType => meal !== null));
      }
    };

    loadPreview();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full max-w-sm">
      <h2 className="font-display text-2xl mb-1">Today&apos;s picks</h2>
      <p className="text-ink-soft text-sm mb-4">
        A few recipes pulled at random. Log in to save your favorites.
      </p>

      {!recipes && (
        <p className="text-ink-soft text-sm">Fetching a few ideas&hellip;</p>
      )}

      <ul className="flex flex-col gap-3">
        {recipes?.map((recipe) => (
          <li
            key={recipe.idMeal}
            className="flex items-center gap-3 bg-card border border-line rounded-xl p-2"
          >
            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{recipe.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestPreview;

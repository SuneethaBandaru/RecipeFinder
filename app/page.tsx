"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RecipeType } from "@/types/types";
import { useUserContext } from "@/contexts/userContext";
import { fetchMealsByCategory, fetchRandomMeal } from "@/lib/mealdb";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const { user } = useUserContext();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadRecipe = async () => {
      setLoading(true);
      const result = user?.category
        ? ((await fetchMealsByCategory(user.category))[0] ?? null)
        : await fetchRandomMeal();
      if (!cancelled) {
        setRecipe(result);
        setLoading(false);
      }
    };

    loadRecipe();
    return () => {
      cancelled = true;
    };
  }, [user?.category]);

  if (!user) return null;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl mb-1">
          Hi, {user.username}
        </h1>
        <p className="text-ink-soft">
          You have{" "}
          <Link href="/profile" className="text-brick underline">
            {user.recipes.length} saved recipe
            {user.recipes.length === 1 ? "" : "s"}
          </Link>
          .
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl mb-3">
          {user.category
            ? `Because you like ${user.category}`
            : "A random idea for today"}
        </h2>

        {loading && <p className="text-ink-soft">Fetching a recipe&hellip;</p>}

        {!loading && recipe && (
          <div className="max-w-xs">
            <RecipeCard {...recipe} />
          </div>
        )}

        {!loading && !recipe && (
          <p className="text-ink-soft">
            Couldn&apos;t reach TheMealDB right now &mdash; Please try again
            later.
          </p>
        )}

        {!user.category && (
          <p className="text-ink-soft text-sm mt-3">
            Pick a{" "}
            <Link href="/categories" className="text-brick underline">
              favourite category
            </Link>{" "}
            Discover recipes made just for you.
          </p>
        )}
      </div>
    </div>
  );
}

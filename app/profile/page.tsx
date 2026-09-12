"use client";

import Link from "next/link";
import { useUserContext } from "@/contexts/userContext";
import RecipeCard from "@/components/RecipeCard";

const ProfilePage = () => {
  const { user } = useUserContext();

  if (!user) return null;

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-1">
        {user.username}&apos;s profile
      </h1>
      <p className="text-ink-soft mb-6">
        {user.category ? (
          <>
            Favourite category:{" "}
            <Link
              href={`/categories/${user.category}`}
              className="text-brick underline"
            >
              {user.category}
            </Link>
          </>
        ) : (
          <>
            No favorite category yet. Choose one from the{" "}
            <Link href="/categories" className="text-brick underline">
              Categories
            </Link>{" "}
            page! ❤️
          </>
        )}
      </p>

      <h2 className="font-display text-xl mb-3">
        Saved recipes ({user.recipes.length})
      </h2>

      {user.recipes.length === 0 ? (
        <p className="text-ink-soft">
          You haven&apos;t saved any recipes yet. Tap “Save recipe” to keep your
          favorites here! ❤️
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {user.recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} {...recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

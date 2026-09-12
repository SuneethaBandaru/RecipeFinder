import Link from "next/link";
import Image from "next/image";
import SaveRecipe from "@/components/SaveRecipe";
import { fetchMealById } from "@/lib/mealdb";
import { extractIngredients } from "@/lib/ingredients";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = await params;
  const recipe = await fetchMealById(id);

  if (!recipe) {
    return (
      <div>
        <h1 className="font-display text-2xl mb-2">Recipe not found</h1>
        <p className="text-ink-soft mb-4">
          We couldn&apos;t load that recipe. It may have moved.
        </p>
        <Link href="/categories" className="text-brick underline">
          Back to categories
        </Link>
      </div>
    );
  }

  const ingredients = extractIngredients(recipe);
  const tags = recipe.strTags
    ? recipe.strTags.split(",").map((tag) => tag.trim())
    : [];

  return (
    <article className="grid md:grid-cols-2 gap-8">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="font-display text-3xl sm:text-4xl mb-2">
          {recipe.strMeal}
        </h1>
        <p className="text-ink-soft mb-4">
          A {recipe.strCategory} recipe from {recipe.strArea}.
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="text-xs bg-paper-dim border border-line rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 mt-6">
          <SaveRecipe
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
          />

          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-900 transition-colors text-paper font-medium rounded-md py-2.5 px-4"
            >
              Watch on YouTube
            </a>
          )}
        </div>

        <h2 className="font-display text-xl mt-8 mb-3">Ingredients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {ingredients.map((ingredient, index) => (
            <li
              key={`${ingredient.name}-${index}`}
              className="flex justify-between gap-4 border-b border-line py-1.5"
            >
              <span>{ingredient.name}</span>
              <span className="text-ink-soft">{ingredient.measure}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-xl mt-8 mb-3">Instructions</h2>
        <div className="text-sm leading-relaxed whitespace-pre-line max-w-prose">
          {recipe.strInstructions}
        </div>
      </div>
    </article>
  );
};

export default RecipePage;

import RecipeCard from "@/components/RecipeCard";
import SaveCategory from "@/components/SaveCategory";
import { fetchMealsByCategory } from "@/lib/mealdb";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = decodeURIComponent(slug);
  const recipes = await fetchMealsByCategory(category);

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-1">{category}</h1>
      <p className="text-ink-soft mb-4">
        {recipes.length} recipe{recipes.length === 1 ? "" : "s"} in this
        category.
      </p>

      <div className="mb-6">
        <SaveCategory strCategory={category} />
      </div>

      {recipes.length === 0 && (
        <p className="text-ink-soft">
          Couldn&apos;t load recipes for this category right now.
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

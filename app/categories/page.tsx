import CategoryCard from "@/components/CategoryCard";
import { fetchCategories } from "@/lib/mealdb";

const CategoriesPage = async () => {
  const categories = await fetchCategories();

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-1">Categories</h1>
      <p className="text-ink-soft mb-6">
        Pick a category to browse its recipes, or mark one as your favourite.
      </p>

      {categories.length === 0 && (
        <p className="text-ink-soft">
          Couldn&apos;t load categories right now &mdash; try again shortly.
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.idCategory} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

import { CategoryType, MealDbApiRecipe, RecipeType } from "@/types/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch (error) {
    console.error(`Failed to fetch ${path}`, error);
    return null;
  }
}

export async function fetchRandomMeal(): Promise<RecipeType | null> {
  const data = await getJson<{ meals: RecipeType[] | null }>("random.php");
  return data?.meals?.[0] ?? null;
}

export async function fetchMealsByCategory(
  category: string,
): Promise<RecipeType[]> {
  const data = await getJson<{ meals: RecipeType[] | null }>(
    `filter.php?c=${encodeURIComponent(category)}`,
  );
  return data?.meals ?? [];
}

export async function fetchMealById(
  id: string,
): Promise<MealDbApiRecipe | null> {
  const data = await getJson<{ meals: MealDbApiRecipe[] | null }>(
    `lookup.php?i=${encodeURIComponent(id)}`,
  );
  return data?.meals?.[0] ?? null;
}

export async function fetchCategories(): Promise<CategoryType[]> {
  const data = await getJson<{ categories: CategoryType[] | null }>(
    "categories.php",
  );
  return data?.categories ?? [];
}

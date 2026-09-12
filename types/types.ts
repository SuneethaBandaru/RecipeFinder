export type UserType = {
  username: string;
  password: string;
  category: string | null;
  recipes: RecipeType[];
};

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  logIn: (username: string, password: string) => boolean;
  logOut: () => void;
  toggleFavouriteCategory: (category: string) => void;
  toggleSavedRecipe: (recipe: RecipeType) => void;
};

export type RecipeType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type Ingredient = {
  name: string;
  measure: string;
};

export type FullRecipeType = RecipeType & {
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string | null;
  strYoutube: string | null;
  ingredients: Ingredient[];
};

export type MealDbApiRecipe = RecipeType & {
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string | null;
  strYoutube: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
};

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

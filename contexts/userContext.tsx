"use client";

import { RecipeType, UserContextType, UserType } from "@/types/types";
import { users as initialUsers } from "@/data/users";
import { createContext, ReactNode, useContext, useState } from "react";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<UserType[]>(initialUsers);
  const [activeUsername, setActiveUsername] = useState<string | null>(null);

  const user =
    allUsers.find((candidate) => candidate.username === activeUsername) ?? null;

  const setUser = (nextUser: UserType | null) => {
    setActiveUsername(nextUser?.username ?? null);
    if (nextUser) {
      setAllUsers((all) =>
        all.map((candidate) =>
          candidate.username === nextUser.username ? nextUser : candidate,
        ),
      );
    }
  };

  const logIn = (username: string, password: string): boolean => {
    const matchedUser = allUsers.find(
      (candidate) =>
        candidate.username === username && candidate.password === password,
    );

    if (!matchedUser) return false;

    setActiveUsername(matchedUser.username);
    return true;
  };

  const logOut = () => setActiveUsername(null);

  const toggleFavouriteCategory = (category: string) => {
    if (!user) return;
    const updatedCategory = user.category === category ? null : category;

    setAllUsers((all) =>
      all.map((candidate) =>
        candidate.username === user.username
          ? { ...candidate, category: updatedCategory }
          : candidate,
      ),
    );
  };

  const toggleSavedRecipe = (recipe: RecipeType) => {
    if (!user) return;
    const alreadySaved = user.recipes.some(
      (saved) => saved.idMeal === recipe.idMeal,
    );

    setAllUsers((all) =>
      all.map((candidate) => {
        if (candidate.username !== user.username) return candidate;
        const recipes = alreadySaved
          ? candidate.recipes.filter((saved) => saved.idMeal !== recipe.idMeal)
          : [...candidate.recipes, recipe];
        return { ...candidate, recipes };
      }),
    );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logIn,
        logOut,
        toggleFavouriteCategory,
        toggleSavedRecipe,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used inside a <UserProvider>");
  }
  return context;
};

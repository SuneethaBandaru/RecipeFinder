"use client";

import { useUserContext } from "@/contexts/userContext";

const SaveCategory = ({ strCategory }: { strCategory: string }) => {
  const { user, toggleFavouriteCategory } = useUserContext();
  const isFavourite = user?.category === strCategory;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <button
        type="button"
        onClick={() => toggleFavouriteCategory(strCategory)}
        className={`self-start rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isFavourite
            ? "bg-brick text-paper"
            : "bg-card border border-line hover:border-brick"
        }`}
      >
        {isFavourite
          ? "★ Favourite category"
          : `Set ${strCategory} as favourite`}
      </button>
      {user?.category && (
        <p className="text-ink-soft text-sm">
          Your favourite category is currently {user.category}.
        </p>
      )}
    </div>
  );
};

export default SaveCategory;

import Link from "next/link";
import Image from "next/image";
import { RecipeType } from "@/types/types";

const RecipeCard = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  return (
    <Link
      href={`/recipes/${idMeal}`}
      className="group block bg-card border border-line rounded-xl overflow-hidden hover:border-brick transition-colors"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={strMealThumb}
          alt={strMeal}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="p-3 text-sm sm:text-base font-medium leading-snug">
        {strMeal}
      </h3>
    </Link>
  );
};

export default RecipeCard;

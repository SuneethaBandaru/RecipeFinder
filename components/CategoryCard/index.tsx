import Link from "next/link";
import Image from "next/image";
import { CategoryType } from "@/types/types";

const CategoryCard = ({ strCategory, strCategoryThumb }: CategoryType) => {
  return (
    <Link
      href={`/categories/${strCategory}`}
      className="group block bg-card border border-line rounded-xl overflow-hidden hover:border-herb transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={strCategoryThumb}
          alt={strCategory}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="p-3 font-display text-lg text-center">{strCategory}</h3>
    </Link>
  );
};

export default CategoryCard;

import Image from "next/image";
import FilterMenuCard from "./FilterMenuCard";
import { Suspense } from "react";

const FilterMenu = () => {
  return (
    <ul className="flex gap-4 mt-5 pb-2 mb-5 overflow-x-auto col-[full] px-(--scroll-padding) scroll-px-(--scroll-padding) snap-x snap-mandatory overflow-x-auto">
      <Suspense>
        <FetchCategories />
      </Suspense>
    </ul>
  );
};

const FetchCategories = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();
  console.log(categories);
  return categories.map((category) => (
    <li key={category.slug} className="flex p-[14px_22px] border-solid border-1 rounded-4xl border-neutral-300 gap-2 w-auto text-nowrap shadow-sm">
      {category.name}
    </li>
  ));
};

export default FilterMenu;

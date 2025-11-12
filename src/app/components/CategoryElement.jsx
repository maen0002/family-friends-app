"use client";

import { useRouter } from "next/navigation";

const CategoryElement = ({ category, slug }) => {
  const router = useRouter();
  return <div onClick={() => router.push(`?category=${slug}`)}>{category}</div>;
};

export default CategoryElement;

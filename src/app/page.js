import Image from "next/image";
import { Suspense } from "react";
import PetList from "./components/PetList";
import Menu from "./components/Menu";
import FilterMenu from "./components/FilterMenu";

export default function Home({ searchParams }) {
  return (
    <div className="grid max-w-125 col-[full] grid-cols-subgrid">
      <h1 className="mt-1 text-center col-[full] text-xl">Produktliste</h1>
      <FilterMenu />
      {/* <PetList /> */}
      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>
      <Menu />
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  console.log(category);
  return <PetList category={category} />;
}

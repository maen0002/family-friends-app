import Image from "next/image";
import Link from "next/link";
import PetList from "./components/PetList";
import Menu from "./components/Menu";
import FilterMenu from "./components/FilterMenu";

export default function Home() {
  return (
    <div className="grid max-w-125 col-[full] grid-cols-subgrid">
      <FilterMenu />
      <PetList />
      <Menu />
    </div>
  );
}

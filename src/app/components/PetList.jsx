import Link from "next/link";
import Image from "next/image";
import PetCard from "./PetCard";

const PetList = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  return (
    <div className="grid grid-cols-2 w-fit gap-5 h-[75svh] overflow-y-auto col-[content] ">
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
      <PetCard name="Harry" age="Young" race="Cat" link="/detalje" />
    </div>
  );
};

export default PetList;

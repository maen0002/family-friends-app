import Link from "next/link";
import Image from "next/image";
import PetCard from "./PetCard";

const PetList = ({ category }) => {
  return (
    <div className="grid grid-cols-2 w-fit gap-5 h-[75svh] overflow-y-auto col-[content] ">
      <PetCard category={category} />
    </div>
  );
};

export default PetList;

import Link from "next/link";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const PetCard = ({ name, age, race, link }) => {
  return (
    <Link src={link} className="grid grid-cols-2 grid-rows-[minmax(0px,fit-content_minmax(0px,fit-content_minmax(0px,fit-content)))] rounded-2xl w-fit h-fit bg-white shadow-md">
      <Image className="row-start-1 row-end-2 col-span-full w-60 aspect-160/114 rounded-2xl mb-3" src="https://placecats.com/neo/300/200" alt="Picture of the author" width={500} height={500} />
      <div className="grid col-span-full row-start-1 row-end-2">
        <div className="h-fit w-fit grid m-2 justify-self-end">
          <FaCircle className="opacity-40 row-span-full col-span-full fill-neutral-400 h-8 w-8 place-self-center" />
          <FiStar className="row-span-full col-span-full h-7 w-7 border-white stroke-white stroke-[1.5px] z-1 place-self-center" />
        </div>
      </div>
      <h2 className="text-xl font-semibold ml-3 mb-1">{name}</h2>
      <p className="opacity-40 self-end justify-self-end mb-1 mr-3">{age}</p>
      <p className="ml-3 mb-4 opacity-40">{race}</p>
    </Link>
  );
};

export default PetCard;

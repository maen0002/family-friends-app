import Image from "next/image";

const FilterMenuCard = ({ filterName, image }) => {
  return (
    <div className="flex p-[14px_22px] border-solid border-1 rounded-4xl border-neutral-300 gap-2">
      <Image src={image} alt="Picture of the author" width={32} height={32} />
      <p>{filterName}</p>
    </div>
  );
};

export default FilterMenuCard;

import Image from "next/image";
import FilterMenuCard from "./FilterMenuCard";

const FilterMenu = () => {
  return (
    <ul className="flex gap-4 mt-1 mb-5 overflow-x-auto col-[full] px-(--scroll-padding) scroll-px-(--scroll-padding) snap-x snap-mandatory overflow-x-auto">
      <li className="snap-start shrink-0">
        <FilterMenuCard filterName="Alle" image="https://placecats.com/neo/300/200" />
      </li>
      <li className="snap-start shrink-0">
        <FilterMenuCard filterName="Katte" image="https://placecats.com/neo/300/200" />
      </li>
      <li className="snap-start shrink-0">
        <FilterMenuCard filterName="Hunde" image="https://placecats.com/neo/300/200" />
      </li>
      <li className="snap-start shrink-0">
        <FilterMenuCard filterName="Andre" image="https://placecats.com/neo/300/200" />
      </li>
    </ul>
  );
};

export default FilterMenu;

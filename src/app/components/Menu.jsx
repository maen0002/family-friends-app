import Link from "next/link";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

const Menu = () => {
  return (
    <div className="flex w-full justify-around mt-5 col-[content]">
      <FiHome className="h-8 w-8" />
      <FiStar className="h-8 w-8" />
      <FiMessageCircle className="h-8 w-8" />
      <FiUser className="h-8 w-8" />
    </div>
  );
};

export default Menu;

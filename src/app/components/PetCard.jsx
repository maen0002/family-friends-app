import Link from "next/link";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { Suspense } from "react";

const PetCard = () => {
  return (
    <Suspense fallback={<div>Loading Products...</div>}>
      <FetchProducts />
    </Suspense>
  );
};

const FetchProducts = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return products.map((product) => (
    <Link href={`/detalje/${product.id}`} key={product.id} className="grid grid-cols-2 grid-rows-[minmax(0px,fit-content_minmax(0px,fit-content_minmax(0px,fit-content)))] rounded-2xl w-fit h-fit bg-white shadow-md">
      <Image className="row-start-1 row-end-2 col-span-full w-60 aspect-160/114 rounded-2xl mb-3" src={product.images[0]} alt="Picture of the author" width={500} height={500} />
      <div className="grid col-span-full row-start-1 row-end-2">
        <div className="h-fit w-fit grid m-2 justify-self-end">
          <FaCircle className="opacity-40 row-span-full col-span-full fill-neutral-400 h-8 w-8 place-self-center" />
          <FiStar className="row-span-full col-span-full h-7 w-7 border-white stroke-white stroke-[1.5px] z-1 place-self-center" />
        </div>
      </div>
      <h2 className="text-xl font-semibold ml-3 mb-1">{product.title}</h2>
      <p className="opacity-40 self-end justify-self-end mb-1 mr-3">{product.price}€</p>
      <p className="ml-3 mb-4 opacity-40">{product.brand ? product.brand : "Unknown Brand"}</p>
    </Link>
  ));
};

export default PetCard;

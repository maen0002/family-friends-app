import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { Suspense } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default async function details({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  const tags = product.tags;
  console.log(tags);
  return (
    <Suspense fallback={<div>Loading Product</div>}>
      <div className="col-start-[2]">
        <Link href="/">
          <FaArrowAltCircleLeft className="w-9 h-9 mt-4" />
        </Link>
        <div className="grid grid-cols-1 grid-rows-1 rounded-4xl inset-shadow-sm shadow-lg mb-5 mt-5 aspect-square">
          <Image src={product.thumbnail} width={300} height={200} alt={product.title} className=" col-start-1 col-end-2 row-start-1 row-end-2 place-self-center" />
          <div className="h-fit row-start-1 row-end-2 col-start-1 col-end-2 w-fit grid m-2 justify-self-end">
            <FaCircle className="opacity-40 row-span-full col-span-full fill-neutral-400 h-8 w-8 place-self-center" />
            <FiStar className="row-span-full col-span-full h-7 w-7 border-white stroke-white stroke-[1.5px] z-1 place-self-center" />
          </div>
        </div>
        <h1 className="text-xl font-bold ">{product.title}</h1>
        <h2 className="mb-2">{product.price}€</h2>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <p className="bg-blue-500 p-[5px_15px] rounded-4xl">{tag}</p>
          ))}
        </div>
        <p className="mt-4">{product.description}</p>
        <button className="bg-blue-700 p-[10px_20px] rounded-2xl w-full text-white mt-5">Køb</button>
      </div>
    </Suspense>
  );
}

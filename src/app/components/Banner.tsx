"use client";

import PrimaryTitle from "../../typography/PrimaryTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false)

  const paths: {[key:string]: string} = {
    "/" : "Home",
    "/about-us": "Meet the Team",
    "/about-bb": "About" 
  }

  const handleOpen =() => {
    setIsOpen(!isOpen)
    console.log
  }

  const pathname = usePathname()

  return (
    <header className="grid grid-cols-3 items-center w-full h-[10vh] border-b-2 border-white">
      <PrimaryTitle style={"col-span-2"}>Bootcamp Benchmark</PrimaryTitle>
      <nav className="flex flex-col items-center justify-center bg-[#6B4D57] h-full">
          <div onClick={handleOpen}>
            <p>{paths[pathname]}</p>
          </div>
          {isOpen ? (
            <>
              {Object.keys(paths).map((key) => {
                return <Link href={key}>{paths[key]}</Link>
              })}
            </>
          ) : null}
      </nav>
    </header>
  );
}

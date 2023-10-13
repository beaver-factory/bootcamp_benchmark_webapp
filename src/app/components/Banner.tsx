"use client";

import PrimaryTitle from "../../typography/PrimaryTitle";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen =() => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="grid grid-cols-3 items-center w-full h-[10vh] border-b-2 border-white">
      <PrimaryTitle style={"col-span-2"}>Bootcamp Benchmark</PrimaryTitle>
      <nav className="bg-[#6B4D57] h-full">
        <div>
          <div onClick={handleOpen}>
            <Link href="/">Home</Link>
          </div>
          {isOpen ? (
            <>
              <div>
                <Link href="/about-bb">About BB</Link>
              </div>
              <div>
                <Link href="/about-us">About Us</Link>
              </div>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

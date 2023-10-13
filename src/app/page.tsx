import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <Link href="/about-us">About Us</Link>
    </main>
  );
}

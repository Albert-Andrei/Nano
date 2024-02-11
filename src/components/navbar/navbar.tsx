import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBar: FC = () => {
  return (
    <header className="max-w-screen-2xl flex flex-row items-center justify-between mt-lg px-20">
      <Link href="/">
        <div className="flex">
          <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
          <Image src="/svg/nano.svg" alt="nano" width={59} height={19} className="ml-1" />
        </div>
      </Link>

      <div className="flex justify-between items-center">
        <Link href="/about" className="p-0 mr-lg">
          <p className="text-white underline underline-offset-8">Submit you&#39;r project</p>
        </Link>

        <button aria-label="Burger menu">
          <Image id="burger" src="/svg/general/menu.svg" alt="Menu" width={32} height={32} />
        </button>
      </div>
    </header>
  );
};

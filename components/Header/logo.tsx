import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/logo.png";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light cursor-pointer" passHref>
      <div
        className="flex justify-start items-center gap-1 text-dark dark:text-light w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-solid dark:border-x-yellow-300 border-dark dark:border-light mr-2 md:mr-4"
      >
        <Image src={Avatar} alt="Life is a long walk" />
      </div>
      <span className="hidden md:flex md:font-semibold text-sm md:text-lg">
        teachernneka.org
      </span>
    </Link>
  );
};


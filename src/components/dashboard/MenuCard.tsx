import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  img: string;
  name: string;
  active?: boolean;
  link: string;
};

const MenuCard = ({ img, name, active, link }: Props) => {
  return (
    <Link href={link}>
      <button
        className={`w-full p-4 hover:bg-stk-slate-1/70 active:bg-stk-slate-1/90  rounded-xl flex items-center gap-4
      ${active ? "bg-stk-slate-1" : ""}`}
      >
        <Image width={16} height={16} src={"/assets/images/" + img} alt="img" />
        <p className="text-stk-gray-1 text-sm font-medium font-['Inter']">
          {name}
        </p>
      </button>
    </Link>
  );
};

export default MenuCard;

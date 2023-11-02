import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  icon: string;
};
//h

const IconBtn = ({ title, icon }: Props) => {
  return (
    <span className="inline-flex items-center px-7 py-4 gap-3 bg-stk-slate-2 rounded-2xl ">
      <Image
        width={25}
        height={25}
        src={"/assets/images/" + icon}
        alt="stack-dropdown"
      />
      <p className="text-stk-gray-2 text-xs font-medium">{title}</p>
    </span>
  );
};

export default IconBtn;

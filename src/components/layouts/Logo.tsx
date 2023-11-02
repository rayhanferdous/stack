import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Image
          className=""
          src={"/assets/images/logo.svg"}
          width={50}
          height={44}
          alt="Stack"
        />
        <div className="text-stk-slate text-[28px] font-bold">Stack</div>
      </div>
    </div>
  );
};

export default Logo;

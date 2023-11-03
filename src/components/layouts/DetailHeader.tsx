import Image from "next/image";
import React from "react";

type Props = {};

const DetailHeader = (props: Props) => {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="relative flex items-center">
        <input
          placeholder="Search"
          className="min-w-[539px] py-4 pl-6 pr-12 focus:outline-none bg-slate-100 rounded-[14px]"
        />
        <Image
          className="absolute right-6"
          width={17}
          height={17}
          src={"/assets/images/search.svg"}
          alt="img"
        />
      </div>
      <div className="flex items-center gap-10">
        <Image
          width={25}
          height={25}
          src={"/assets/images/bell.svg"}
          alt="bell"
        />
        <Image
          className="rounded-full"
          width={47}
          height={47}
          src={"/assets/images/avater.png"}
          alt="avater"
        />
      </div>
    </header>
  );
};

export default DetailHeader;

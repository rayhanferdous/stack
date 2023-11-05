import Image from "next/image";
import React from "react";

type Props = {
  img: string;
  name: string;
};

const UserListCard = ({ img, name }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        width={60}
        height={60}
        className="rounded-[15px]"
        src="/assets/images/avater.png"
        alt="user-image"
      />
      <div className="text-slate-600 text-sm font-semibold font-['Inter']">
        {name}
      </div>
    </div>
  );
};

export default UserListCard;

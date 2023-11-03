import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex flex-col">
      <h2 className="text-stk-gray text-[23px] font-semibold">Users List</h2>
      <div>
        <div className="text-stk-slate grid grid-cols-[100px,1fr,1fr,100px] justify-items-center py-4 bg-stk-gray-3 rounded-xl text-xs font-semibold tracking-wide">
          <div>#ID</div>
          <div className="place-self-start">USER</div>
          <div className="place-self-start">USER</div>
          <div>OPTIONS</div>
        </div>
        <div className="text-stk-slate grid grid-cols-[100px,1fr,1fr,100px] justify-items-center py-4 text-xs font-semibold tracking-wide">
          <div>1</div>
          <div className="place-self-start">USER</div>
          <div className="place-self-start">USER</div>
          <button>
            <Image
              src="/assets/images/three-dot.svg"
              width={20}
              height={20}
              alt="three-dot"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;

import UserListCard from "@/components/utils/UserListCard";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex flex-col gap-10">
      <h2 className="text-stk-gray text-[23px] font-semibold">Users List</h2>
      <div>
        <div className="text-stk-slate grid grid-cols-[150px,1fr,1fr,100px] justify-items-center py-4 bg-stk-gray-3 rounded-xl text-xs font-semibold tracking-wide">
          <div>#ID</div>
          <div className="place-self-start">USER</div>
          <div className="place-self-start">Email</div>
          <div>OPTIONS</div>
        </div>
        <div className="!overflow-y-scroll h-[calc(100dvh-250px)]">
          <div className="text-stk-slate grid grid-cols-[150px,1fr,1fr,100px] items-center justify-items-start py-4 text-xs font-semibold tracking-wide">
            <div className="place-self-center">1</div>
            <div>
              <UserListCard img="" name="Michael Lawson" />
            </div>
            <div className="text-start text-slate-600 text-sm font-semibold ">
              michael.lawson@reqres.in
            </div>
            <button className="place-self-center">
              <Image
                src="/assets/images/three-dot.svg"
                width={20}
                height={20}
                alt="three-dot"
              />
            </button>
          </div>
          <div className="text-stk-slate grid grid-cols-[150px,1fr,1fr,100px] items-center justify-items-start py-4 text-xs font-semibold tracking-wide">
            <div className="place-self-center">1</div>
            <div>
              <UserListCard img="" name="Michael Lawson" />
            </div>
            <div className="text-start text-slate-600 text-sm font-semibold ">
              michael.lawson@reqres.in
            </div>
            <button className="place-self-center">
              <Image
                src="/assets/images/three-dot.svg"
                width={20}
                height={20}
                alt="three-dot"
              />
            </button>
          </div>
          <div className="text-stk-slate grid grid-cols-[150px,1fr,1fr,100px] items-center justify-items-start py-4 text-xs font-semibold tracking-wide">
            <div className="place-self-center">1</div>
            <div>
              <UserListCard img="" name="Michael Lawson" />
            </div>
            <div className="text-start text-slate-600 text-sm font-semibold ">
              michael.lawson@reqres.in
            </div>
            <button className="place-self-center">
              <Image
                src="/assets/images/three-dot.svg"
                width={20}
                height={20}
                alt="three-dot"
              />
            </button>
          </div>
          <div className="text-stk-slate grid grid-cols-[150px,1fr,1fr,100px] items-center justify-items-start py-4 text-xs font-semibold tracking-wide">
            <div className="place-self-center">1</div>
            <div>
              <UserListCard img="" name="Michael Lawson" />
            </div>
            <div className="text-start text-slate-600 text-sm font-semibold ">
              michael.lawson@reqres.in
            </div>
            <button className="place-self-center">
              <Image
                src="/assets/images/three-dot.svg"
                width={20}
                height={20}
                alt="three-dot"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

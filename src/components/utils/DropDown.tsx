"use client";
import Image from "next/image";
import React, { useState } from "react";
import { languages } from "./LanguageList";

type Props = {};

const DropDown = (props: Props) => {
  const [lang, setLang] = useState("English (UK)");
  return (
    <span className="group relative ">
      <span className="inline-flex px-3 py-3.5 gap-9 bg-stk-slate-2 rounded-2xl ">
        <p className="text-stk-gray-2 text-xs font-medium">{lang}</p>
        <Image
          width={12}
          height={8}
          src={"/assets/images/down-arrow.svg"}
          alt="stack-dropdown"
        />
      </span>
      <span className="rounded-xl shadow-sm inset-x-0 absolute bg-stk-slate-2 stk-slate-2 hidden group-hover:block">
        {languages.map((language, index) => (
          <span
            key={index}
            className="flex items-center border-b active:bg-stk-blue-1/70 hover:bg-stk-blue-1/80 hover:text-white active:text-white justify-between text-stk-gray-2 text-xs font-medium px-3 py-3.5 gap-9 rounded-2xl "
            onClick={() => setLang(language.name)}
          >
            {language.name}
          </span>
        ))}
      </span>
    </span>
  );
};

export default DropDown;

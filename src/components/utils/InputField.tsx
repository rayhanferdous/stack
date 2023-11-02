import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  type: string;
  placeholder: string;
  trailing?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
};

const InputField = ({
  image,
  name,
  type,
  placeholder,
  trailing,
  handleChange,
  handleBlur,
  value,
}: Props) => {
  return (
    <div className="relative inline-flex w-full gap-2.5 items-center">
      <Image
        className="absolute left-4"
        width={22}
        height={22}
        src={"/assets/images/" + image}
        alt="stack"
      />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={`w-full pl-12 py-4  bg-white rounded-2xl shadow border border-red-500 ${
          trailing ? "pr-12" : "pr-4"
        }`}
      />
      {trailing && (
        <Image
          className="absolute right-4 cursor-pointer"
          width={20}
          height={20}
          src={"/assets/images/" + trailing}
          alt="stack"
        />
      )}
    </div>
  );
};

export default InputField;

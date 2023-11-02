import React from "react";

type Props = {
  name: string;
};

const SubmitBtn = ({ name }: Props) => {
  return (
    <button
      type="submit"
      className="w-full py-4 text-center text-white bg-stk-blue-3 rounded-2xl border border-stk-blue-3"
    >
      {name}
    </button>
  );
};

export default SubmitBtn;

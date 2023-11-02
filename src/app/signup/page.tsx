"use client";
import IconBtn from "@/components/utils/IconBtn";
import InputField from "@/components/utils/InputField";
import SubmitBtn from "@/components/utils/SubmitBtn";
import { useEffect } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";

type Props = {
  email: string;
};

export default function Home({ email }: Props) {
  const [fields, errors, form] = useFormInputValidation(
    {
      email_address: "",
      your_name: "",
      password: "",
    },
    {
      email_address: "required|email",
      your_name: "required",
      password: "required",
    }
  );

  form.useLang(Lang.en);

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      console.log("MAKE AN API CALL", fields, errors);
    }
  };

  useEffect(() => {
    if (form.isValidForm) {
      console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
    }
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="inline-flex h-full flex-col gap-7 pb-20">
        <div className="inline-flex items-center flex-col gap-2">
          <h2 className="text-stk-gray text-[26px] font-bold">
            Getting Started
          </h2>
          <p className="text-stk-gray-4 text-lg font-medium">
            Create an account to continue!
          </p>
        </div>
        <div className="inline-flex gap-7 items-center">
          <IconBtn title="Sign Up with Google" icon="google.svg" />
          <IconBtn title="Sign Up with Apple ID" icon="apple.svg" />
        </div>
        <div className="flex items-center gap-6">
          <span className="block w-full h-0.5 bg-stk-slate-1" />
          <p className="text-stk-gray-2 text-xl font-medium font-['Inter']">
            OR
          </p>
          <span className="block w-full h-0.5 bg-stk-slate-1" />
        </div>
        <form
          className="flex flex-col gap-4"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4">
            <InputField
              image="at-sign.svg"
              type="email"
              name="email_address"
              handleBlur={form.handleBlurEvent}
              handleChange={form.handleChangeEvent}
              placeholder="Email Address"
              value={fields.email_address}
            />
            {errors.email_address && (
              <label className="error">
                {errors.email_address ? errors.email_address : ""}
              </label>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <InputField
              image="at-sign.svg"
              type="text"
              name="your_name"
              handleBlur={form.handleBlurEvent}
              handleChange={form.handleChangeEvent}
              placeholder="Your Name"
              value={fields.required}
            />
            {errors.required && (
              <label className="error">
                {errors.required ? errors.required : ""}
              </label>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <InputField
              image="lock.svg" // You can set the appropriate icon for a password field
              type="password" // Use "password" type for masking the password characters
              name="password"
              trailing="eye.svg"
              handleBlur={form.handleBlurEvent}
              handleChange={form.handleChangeEvent}
              placeholder="Password"
              value={fields.password}
            />
            {errors.password && (
              <label className="error">
                {errors.password ? errors.password : ""}
              </label>
            )}
          </div>

          <label className="w-fit">
            <input
              type="checkbox"
              name="extras"
              onChange={form.handleChangeEvent}
              value="baby"
            />{" "}
            <span className="text-stk-gray-2 text-base font-medium">
              Remember Me
            </span>
          </label>

          <SubmitBtn name="Sign In" />
        </form>
        <div className="text-center">
          <span className="text-stk-gray-2 text-base font-medium">
            Don’t have an account yet?{" "}
          </span>
          <span className="text-stk-blue-3 text-base font-medium">Sign Up</span>
        </div>
      </div>
    </main>
  );
}

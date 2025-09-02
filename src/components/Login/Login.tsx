"use client";
import Image from "next/image";
import { FC, FormEvent, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { performLoginOperation } from "@/app/data/user";
import { BeatLoader } from "react-spinners";
import Button from "../Button/Button";
import { useUserContext } from "@/app/contexts/UserContext";
import { errorToast, successToast } from "@/utils/toaster";
import { useRouter, useSearchParams } from "next/navigation";

type LoginErrorProps = {
  email?: string;
  password?: string;
};

const Login: FC = () => {
  const { handleUserLoggedInState } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<LoginErrorProps>({});
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const validateForm = useCallback((email: string, password: string) => {
    const formErrors: LoginErrorProps = {};
    const emailRegex =
      /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Email is invalid.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length !== 0) {
      return false;
    }
    return true;
  }, []);

  const handleOnFormSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formRef?.current) {
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const isFormValid = validateForm(email, password);
        if (!isFormValid) {
          errorToast("Please check form fields and try again");
          setIsLoading(false);
          return;
        }
        const [response, err] = await performLoginOperation(email, password);

        if (err) {
          console.log(err);
          setIsLoading(false);
          errorToast(
            err.response
              ? err.response.data?.error
              : "Not able log in. Please try again later"
          );
          return;
        }
        setIsLoading(false);
        if (response?.success) {
          handleUserLoggedInState(true);
          successToast("User successfully logged in");
          console.log("callback", callbackUrl);
          router.push(callbackUrl);
        }
      }
    },
    [callbackUrl, handleUserLoggedInState, router, validateForm]
  );

  return (
    <div className="relative py-16 px-4 overflow-hidden bg-white">
      <div className="min-h-[400px] max-w-6xl bg-white2 mx-auto shadow-lg rounded-xl overflow-hidden relative">
        <div className="grid lg:grid-cols-[50%_50%]">
          <div className=" hidden lg:flex">
            <div className="imageBlock w-full h-full relative overflow-hidden before:content-['']">
              <Image
                className="w-full border object-cover block"
                src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/main-rev-img-2.jpg"
                alt="product"
                fill
              />
            </div>
          </div>
          <div className=" p-10">
            <fieldset>
              <legend className="text-4xl tracking-widest text-brick uppercase font-semibold mb-3">
                <h1>Login</h1>
              </legend>
              <form
                ref={formRef}
                onSubmit={handleOnFormSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col tracking-wider">
                  <label htmlFor="email" className="mb-2 capitalize font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="py-2 px-4 border border-black focus:outline-none"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col tracking-wider">
                  <label
                    htmlFor="password"
                    className="mb-2 capitalize font-light"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="py-2 px-4 border border-black mb-2 focus:outline-none"
                    required
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Button
                    type="submit"
                    className="text-white2 font-xl tracking-wider font-semibold px-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <BeatLoader color="white" loading={isLoading} />
                    ) : (
                      <span>Login</span>
                    )}
                  </Button>
                </div>
              </form>
            </fieldset>
            <span className="mt-4 inline-block font-light tracking-wider">
              Want to register new account ?{" "}
              <Link
                href={`/register?callbackUrl=${encodeURIComponent(
                  callbackUrl
                )}`}
                className="underline text-brick tracking-wider font-semibold underline-offset-2"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

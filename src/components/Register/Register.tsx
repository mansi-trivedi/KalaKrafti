"use client";
import Image from "next/image";
import { FC, FormEvent, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { performUserRegistration } from "@/app/data/user";
import { BeatLoader } from "react-spinners";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { errorToast, successToast } from "@/utils/toaster";

type RegisterErrorProps = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstname?: string;
  lastname?: string;
};

const Register: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<RegisterErrorProps>({});
  const router = useRouter();

  const validateForm = useCallback(
    (
      email: string,
      password: string,
      cPassword: string,
      firstname: string,
      lastname: string
    ) => {
      const formErrors: RegisterErrorProps = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!firstname) {
        formErrors.firstname = "Firstname is required";
      }

      if (!lastname) {
        formErrors.lastname = "Lastname is required";
      }

      if (!email) {
        formErrors.email = "Email is required";
      } else if (!emailRegex.test(email)) {
        formErrors.email = "Email is invalid";
      }

      if (!password) {
        formErrors.password = "Password is required";
      } else if (password.length < 8) {
        formErrors.password = "password must contain at least 8 character";
      }

      if (!cPassword) {
        formErrors.confirmPassword = "Confirm Password is required";
      } else if (password !== cPassword) {
        formErrors.confirmPassword =
          "Password and confirm Password must be equal";
      }
      setErrors(formErrors);
      if (Object.keys(formErrors).length !== 0) {
        return false;
      }
      return true;
    },
    []
  );

  const handleOnFormSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formRef?.current) {
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const cPassword = formData.get("confirm-password") as string;
        const firstName = formData.get("firstname") as string;
        const lastName = formData.get("lastname") as string;
        const isFormValid = validateForm(
          email,
          password,
          cPassword,
          firstName,
          lastName
        );
        if (!isFormValid) {
          errorToast("Please check form fields and try again");
          setIsLoading(false);
          return;
        }
        const [, err] = await performUserRegistration(
          email,
          password,
          lastName,
          firstName
        );
        if (err) {
          errorToast(
            err.response
              ? err.response.data?.error
              : "Not able to register at this moment. Please try again later"
          );
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        successToast("User registered successfully");
        router.push("/login");
      }
    },
    [router, validateForm]
  );

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      <div className="min-h-[400px] max-w-6xl bg-white mx-auto shadow-lg rounded-xl overflow-hidden relative">
        <div className="grid lg:grid-cols-[50%_50%]">
          <div className="hidden lg:flex">
            <div className="imageBlock w-full h-full relative overflow-hidden">
              <Image
                className="w-full border object-cover block"
                src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/main-rev-img-1.jpg"
                alt="product"
                fill
              />
            </div>
          </div>
          <div className="p-10">
            <fieldset>
              <legend className="text-4xl tracking-widest text-brick uppercase font-semibold mb-3">
                <h1>Registration</h1>
              </legend>
              <form
                ref={formRef}
                onSubmit={handleOnFormSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col tracking-wider">
                  <label
                    htmlFor="firstname"
                    className="mb-2 capitalize font-light"
                  >
                    Firstname
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname"
                    className="py-2 px-4 border border-black"
                    required
                  />
                  {errors.firstname && (
                    <p className="text-red-500">{errors.firstname}</p>
                  )}
                </div>

                <div className="flex flex-col tracking-wider">
                  <label
                    htmlFor="lastname"
                    className="mb-2 capitalize font-light"
                  >
                    Lastname
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    className="py-2 px-4 border border-black"
                    required
                  />
                  {errors.lastname && (
                    <p className="text-red-500">{errors.lastname}</p>
                  )}
                </div>

                <div className="flex flex-col tracking-wider">
                  <label htmlFor="email" className="mb-2 capitalize font-light">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="py-2 px-4 border border-black"
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
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="py-2 px-4 border border-black mb-2"
                    required
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>

                <div className="flex flex-col tracking-wider">
                  <label
                    htmlFor="confirm-password"
                    className="mb-2 capitalize font-light"
                  >
                    confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                    placeholder="Re-Enter your password"
                    className="py-2 px-4 border border-black mb-2"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Button
                    type="submit"
                    className="text-white2 font-xl tracking-wider font-semibold px-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
                  >
                    {isLoading ? (
                      <BeatLoader color="white" loading={isLoading} />
                    ) : (
                      <span>REGISTER</span>
                    )}
                  </Button>
                </div>
              </form>
            </fieldset>
            <span className="mt-4 inline-block font-light tracking-wider">
              Already have an account ?{" "}
              <Link
                href={"/login"}
                className="underline text-brick tracking-wider font-semibold underline-offset-2"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

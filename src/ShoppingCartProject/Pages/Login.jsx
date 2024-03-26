import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/features/UserSlice";

export const Login = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
  };

  let message;

  if (errors?.email?.message || errors?.password?.message) {
    //
    window.scrollTo({ top: 0, behavior: "smooth" });

    message = (
      <div className="bg-red-500 mb-4 rounded flex flex-col justify-start items-start p-3">
        {errors?.email?.message && (
          <p className="text-white">{errors?.email?.message}</p>
        )}
        {errors?.password?.message && (
          <p className="text-white">{errors?.password?.message}</p>
        )}
      </div>
    );
  } else {
  }
  <></>;

  return (
    <div className="relative my-20 border mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          {message}
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">
            Sign in below to access your account
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mt-6">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="email"
                className={`pointer-events-none text-gray-700 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-500`}
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                id="password"
                placeholder="Password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don&#x27;t want to be member yet?{" "}
              <Link
                to={"/"}
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Guest User
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

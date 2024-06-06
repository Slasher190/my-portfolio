"use client";

import React from "react";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { userLoginSchema } from "@app/Validation/userSchema";
import { FaFacebook } from "react-icons/fa";
import ThemeToggleIcon from "@app/components/ThemeToggleIcon";

const Authentication = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-light-surface dark:bg-dark-background">
      <div className="flex">
        <div className="w max-w-[400px] flex flex-col justify-center items-center bg-light-background dark:bg-dark-surface p-10 rounded-3xl">
          <div className="flex justify-between items-center w-full mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Login ✌️
            </h1>
            <div className="ml-auto">
              <ThemeToggleIcon />
            </div>
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            How do I get started lorem ipsum dolor at?
          </p>
          <button className="flex items-center justify-center mb-4 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <FcGoogle className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center mb-4 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaFacebook className="w-6 h-6 mr-2 text-blue-600" />
            Sign in with Facebook
          </button>
          <div className="flex items-center justify-center mb-4 w-full py-2 px-4 border-b border-gray-300 dark:border-gray-600">
            <span className="text-gray-500 dark:text-gray-400">
              or Sign in with Email
            </span>
          </div>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`my-2 w-full py-2 px-4 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-full shadow-sm bg-light-background dark:bg-dark-background text-gray-700 dark:text-gray-300`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-[12px] ">
                *{formik.errors.email}
              </div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className={`my-2 w-full py-2 px-4 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-full shadow-sm bg-light-background dark:bg-dark-background text-gray-700 dark:text-gray-300`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500  text-[12px]">
                *{formik.errors.password}
              </div>
            ) : null}
            <a href="#" className="mb-4 text-blue-500 dark:text-blue-400">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-full shadow-sm hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
            >
              Login
            </button>
          </form>
          <h1 className="text-gray-900 mb-4 mt-4 dark:text-gray-300">
            No account?
            <a href="#" className="text-blue-500 dark:text-blue-400">
              {" "}
              Create one{" "}
            </a>
          </h1>
          <h1 className="text-sm text-gray-300 p-4">
            @2024 All copyrights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
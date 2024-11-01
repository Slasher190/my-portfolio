"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { userLoginSchema } from "@app/Validation/userSchema";
import { FaFacebook } from "react-icons/fa";
import ThemeToggleIcon from "@app/components/ThemeToggleIcon";
import { LoginInput } from "@app/graphql/graphql";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@app/graphql/operations/userOperation/mutations/loginUser";
import {
  userMutationStart,
  userMutationSuccess,
  userMutationError,
} from "@app/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@app/redux/store/hooks";
import { useRouter } from "next/navigation";

const Authentication = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const formik = useFormik<LoginInput>({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: async (values: LoginInput) => {
      dispatch(userMutationStart());
      try {
        const { data } = await loginUser({
          variables: {
            input: {
              email: values.email,
              password: values.password,
              username: values.username,
            },
          },
        });
        if (data.loginUser.user) {
          dispatch(userMutationSuccess(data.loginUser));
          router.push(`/@${user?.username}`);
        } else if (data.loginUser.error || error) {
          dispatch(userMutationError(data.loginUser));
        } else {
          console.error("Unexpected error");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    // if (user) router.push(`/@${user?.username}`);
    if (data?.loginUser?.error) throw new Error(data.loginUser.error.message);
  }, [data, dispatch, error, loading, user, router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="flex justify-center items-center h-[100vh] w-full bg-light-surface dark:bg-dark-background">
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
              type="text"
              name="usernameOrEmail"
              placeholder="Email or Username"
              className={`my-2 w-full py-2 px-4 border ${
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.username && formik.errors.username)
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-full shadow-sm bg-light-background dark:bg-dark-background text-gray-700 dark:text-gray-300`}
              onChange={(e) => {
                const value = e.target.value;
                formik.setFieldValue("email", value.includes("@") ? value : "");
                formik.setFieldValue(
                  "username",
                  value.includes("@") ? "" : value
                );
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.username || formik.values.email || ""}
            />
            {(formik.touched.email && formik.errors.email) ||
            (formik.touched.username && formik.errors.username) ? (
              <div className="text-red-500 text-[12px]">
                *{formik.errors.email || formik.errors.username}
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
            <a
              href="#"
              className="mb-4 text-blue-500 dark:text-blue-400 w-full text-center"
            >
              <div>Forgot Password?</div>
            </a>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-full shadow-sm hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 mt-2"
            >
              Login
            </button>
          </form>
          <h1 className="text-gray-900 dark:text-gray-300 mb-4 mt-4 ">
            No account?
            <a href="/signup" className="text-blue-500 dark:text-blue-400">
              Create one
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

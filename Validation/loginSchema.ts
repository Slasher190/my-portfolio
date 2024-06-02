import { object, string } from "yup";

export const userLoginSchema = object({
  username: string()
    .min(4, "Username must be at least 4 characters long.")
    .max(16, "Username must be at most 16 characters long.")
    .required("Please input your username.")
    .trim(),
  email: string()
    .email("Please provide a valid email.")
    .required("Please provide your email.")
    .trim(),
  password: string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character."
    )
    .required("Please provide your password."),
});

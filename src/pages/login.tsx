import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "@/services/auth";

const Login = () => {
  const [login, result] = useLoginMutation()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("geçersiz email")
        .required("lütfen email giriniz"),
      password: Yup.string()
        .max(10, "şifre en fazla 10 karakter olabilir")
        .min(6, "şifre en az 6 karakter olabilir")
        .required("lürfen şifrenizi giriniz"),
    }),
    onSubmit: (values) => {
      console.log(values);
      login(values)
    },
  });
  return (
    <div className="p-10">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mx-3"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

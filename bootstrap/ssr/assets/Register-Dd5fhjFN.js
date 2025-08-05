import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-CBvD_6aD.js";
import { I as InputLabel } from "./InputLabel-DjpSMn3K.js";
import { T as TextInput } from "./TextInput-C4qymzAp.js";
import { useForm, Head, Link } from "@inertiajs/react";
import "react";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex justify-between bg-stone-50", children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 md:mx-8 flex flex-col items-center justify-between w-1/2 pb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 items-center py-12", children: /* @__PURE__ */ jsx("img", { src: "img/logo.png", alt: "logo", className: "md:h-24 2xl:h-32" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl", children: "Buat Akun Baru" }),
          /* @__PURE__ */ jsx("p", { className: "text-zinc-500", children: "Silahkan masukkan data diri Anda pada formulir" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "name",
                name: "name",
                value: data.name,
                autoComplete: "name",
                isFocused: true,
                onChange: (e) => setData("name", e.target.value),
                required: true,
                className: "w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.name,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                autoComplete: "username",
                onChange: (e) => setData("email", e.target.value),
                required: true,
                className: "w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.email,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                autoComplete: "new-password",
                onChange: (e) => setData("password", e.target.value),
                required: true,
                className: "w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password_confirmation",
                value: "Confirm Password"
              }
            ),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password_confirmation",
                type: "password",
                name: "password_confirmation",
                value: data.password_confirmation,
                autoComplete: "new-password",
                onChange: (e) => setData(
                  "password_confirmation",
                  e.target.value
                ),
                required: true,
                className: "w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password_confirmation,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-6", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full py-3 bg-lime-600 hover:bg-lime-700 rounded-lg font-semibold text-white cursor-pointer",
                children: "Daftar"
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-zinc-500", children: [
              "Sudah punya akun? ",
              "",
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/login",
                  className: "text-lime-500 hover:text-lime-600",
                  children: "Masuk di sini"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("footer", { className: "w-full flex justify-between text-sm text-zinc-500", children: [
        /* @__PURE__ */ jsx("h3", { children: "Copyright © 2025 Descas" }),
        /* @__PURE__ */ jsx("h4", { children: "WADJAH Creative & Innovate" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-[url('/img/login.jpg')] m-4 bg-cover bg-center w-1/2 hidden md:block rounded-xl" })
  ] });
}
export {
  Register as default
};

import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
function Home({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: classname,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            d: "M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
          }
        )
      ] })
    }
  ) });
}
function Calculate({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: classname,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            d: "M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"
          }
        )
      ] })
    }
  ) });
}
function Sale({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: classname,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z" }),
        /* @__PURE__ */ jsx("circle", { cx: 15, cy: 9, r: 1, fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { cx: 9, cy: 9, r: 1, fill: "currentColor" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: 1.5,
            d: "M9 6V5a3 3 0 1 1 6 0v1"
          }
        )
      ] })
    }
  ) });
}
function Sample({ clasName }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: clasName,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        }
      )
    }
  ) });
}
function DashboardSidebar() {
  return /* @__PURE__ */ jsxs("nav", { className: "hidden lg:block w-64 h-screen mx-2 my-6 p-4 bg-white rounded-xl drop-shadow-lg", children: [
    /* @__PURE__ */ jsx("img", { src: "/img/logo.png", alt: "logo", className: "h-16" }),
    /* @__PURE__ */ jsxs("div", { className: "py-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs 2xl:text-sm text-zinc-500 mb-2", children: "Menu" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-sm 2xl:text-base", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/dashboard",
            className: "w-full flex items-center gap-2 px-4 py-3 bg-lime-100  font-bold rounded-lg",
            children: [
              /* @__PURE__ */ jsx(Home, { classname: "h-5 stroke-[2px] stroke-black" }),
              /* @__PURE__ */ jsx("span", { children: "Dashboard" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/rendemen",
            className: "w-full flex items-center gap-2 px-4 py-3  font-semibold text-zinc-400 rounded-lg",
            children: [
              /* @__PURE__ */ jsx(Calculate, { classname: "h-5 stroke-[1.8px] stroke-zinc-400" }),
              /* @__PURE__ */ jsx("span", { children: "Hitung Rendemen" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/sale",
            className: "w-full flex items-center gap-2 px-4 py-3  font-semibold text-zinc-400 rounded-lg",
            children: [
              /* @__PURE__ */ jsx(Sale, { classname: "h-5 stroke-[1.8px] stroke-zinc-400" }),
              /* @__PURE__ */ jsx("span", { children: "Jual Produk" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/sample",
            className: "w-full flex items-center gap-2 px-4 py-3  font-semibold text-zinc-400 rounded-lg",
            children: [
              /* @__PURE__ */ jsx(Sample, { clasName: "h-5 stroke-[1.8px] stroke-zinc-400" }),
              /* @__PURE__ */ jsx("span", { children: "Berat Sampel" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Calculate as C,
  DashboardSidebar as D,
  Sale as S
};

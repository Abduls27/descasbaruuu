import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar, C as Calculate, S as Sale } from "./DashboardSidebar-CLN_5aDl.js";
import { Head } from "@inertiajs/react";
import "./Language-cjBa2JN0.js";
import "react";
function Cassava({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: classname,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          d: "m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"
        }
      )
    }
  ) });
}
function Dashboard() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-stone-50", children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("main", { className: "flex", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("section", { className: "grow mt-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/img/rabbit.png",
              alt: "avatar",
              className: "h-12"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: "Kocak Gaming" }),
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-sm  text-zinc-400", children: "Petani" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 pr-36 bg-white rounded-lg drop-shadow-xl", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-zinc-400 text-sm", children: "Jumlah Perhitungan" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-6", children: [
              /* @__PURE__ */ jsx(Calculate, { classname: "h-6 stroke-lime-600 " }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-4xl text-zinc-800", children: "30" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 pr-48 bg-white rounded-lg drop-shadow-xl", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-zinc-400 text-sm", children: "Produk Dijual" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-6", children: [
              /* @__PURE__ */ jsx(Sale, { classname: "h-6 text-lime-600 stroke-lime-600" }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-4xl text-zinc-800", children: "12" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 pr-40 bg-white rounded-lg drop-shadow-xl", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-zinc-400 text-sm", children: "Jumlah Jenis Singkong" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-6", children: [
              /* @__PURE__ */ jsx(Cassava, { classname: "h-6 text-lime-600 stroke-lime-600" }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-4xl text-zinc-800", children: "7" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};

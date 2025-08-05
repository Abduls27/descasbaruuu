import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar, S as Sale } from "./DashboardSidebar-CLN_5aDl.js";
import { Link } from "@inertiajs/react";
import "./Language-cjBa2JN0.js";
import "react";
function SaleIndex({ sales }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-stone-50", children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "flex", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "min-w-90 lg:w-240 2xl:w-348 mx-4 py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl md:text-2xl 2xl:text-4xl", children: "Jual Singkong" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 mb-8 text-sm 2xl:text-base text-zinc-500", children: "Tabel data singkong yang dijual oleh petani" }),
          /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col-reverse gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Cari produk",
                className: "h-10 2xl:h-12 min-w-64 md:w-80 px-4 py-2 border border-zinc-200 focus:outline-lime-500 placeholder:text-sm rounded-lg"
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "sale/create",
                className: "flex justify-center items-center gap-2 px-8 py-2 bg-lime-200  hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg  font-semibold group",
                children: [
                  /* @__PURE__ */ jsx(Sale, { classname: "h-5 stroke-[1.5px] stroke-lime-900 group-hover:stroke-white" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Jual Produk" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto shadow-md rounded-lg", children: /* @__PURE__ */ jsxs("table", { className: "min-w-max text-sm xl:text-lg text-left text-zinc-500 ", children: [
          /* @__PURE__ */ jsx("thead", { className: "text-xs md:text-sm 2xl:text-base text-zinc-800 bg-zinc-100", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Nama" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Email" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "NIK" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Whatsapp" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Alamat" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Maps" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Jenis Tanah" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Harga" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Reflaksi" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Berat" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Rendemen" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: sales.map((sa) => /* @__PURE__ */ jsxs(
            "tr",
            {
              className: "odd:bg-white even:bg-zinc-100 text-sm 2xl:text-base border-b border-zinc-200",
              children: [
                /* @__PURE__ */ jsx("th", { className: "px-6 py-4 font-medium text-zinc-800 whitespace-nowrap ", children: sa.name }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.email }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.nik }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.number }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.address }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.maps }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.land }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.price }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.reflaction }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.weight }),
                /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: sa.rendemen.code })
              ]
            },
            sa.id
          )) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  SaleIndex as default
};

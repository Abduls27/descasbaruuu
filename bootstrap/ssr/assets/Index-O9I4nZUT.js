import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar, C as Calculate } from "./DashboardSidebar-CLN_5aDl.js";
import { router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./Language-cjBa2JN0.js";
function Index({ rendemens, search }) {
  const [query, setQuery] = useState(search || "");
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.get(
        route("rendemen.index"),
        { search: query },
        {
          preserveState: true,
          replace: true
        }
      );
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-stone-50", children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "flex ", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "min-w-90 xl:min-w-240 mx-4 py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold md:text-2xl 2xl:text-4xl", children: "Hitung Rendemen Singkong" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 mb-8 text-sm 2xl:text-base text-zinc-500", children: "Tabel histori hasil perhitungan dan sistem kalkulasi rendemen singkong" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Cari hasil perhitungan",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                className: "h-10 2xl:h-12 min-w-80 px-4 py-2 border border-zinc-200 focus:outline-lime-500 placeholder:text-sm rounded-lg"
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "rendemen/create",
                className: "flex justify-center items-center gap-2 px-8 py-2 bg-lime-200  hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg  font-semibold group",
                children: [
                  /* @__PURE__ */ jsx(Calculate, { classname: "h-5 stroke-[1.5px] stroke-lime-900 group-hover:stroke-white" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Hitung Rendemen" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto shadow-md sm:rounded-lg", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm xl:text-lg text-left text-gray-500 ", children: [
          /* @__PURE__ */ jsx("thead", { class: "text-xs md:text-sm 2xl:text-base text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Nama" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Tanggal" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Jenis Ketela" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Nilai WO" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Nilai WU" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Hasil SG" }),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Hasil SC" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: rendemens.map((ren) => /* @__PURE__ */ jsxs(
            "tr",
            {
              class: "odd:bg-white even:bg-gray-50 text-sm 2xl:text-base border-b border-gray-200",
              children: [
                /* @__PURE__ */ jsx("th", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap ", children: ren.name }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: ren.date }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: ren.jenis }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: ren.wo }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: ren.wu }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: ren.sg }),
                /* @__PURE__ */ jsxs("td", { class: "px-6 py-4", children: [
                  ren.sc,
                  "%"
                ] })
              ]
            },
            ren.id
          )) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Index as default
};

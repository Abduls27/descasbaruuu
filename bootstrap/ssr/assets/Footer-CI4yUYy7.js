import { jsxs, jsx } from "react/jsx-runtime";
import { A as Arrow } from "./Arrow-BBecdeKL.js";
import { Link } from "@inertiajs/react";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mx-2 2xl:mx-4 my-2 2xl:my-4 p-8 lg:p-16 pb-4 bg-zinc-800 rounded-xl text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-120 2xl:w-1/3", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-xl md:text-2xl 2xl:text-3xl", children: [
          "Bersama WADJAH Inovasi Indonesia",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-lg md:text-xl 2xl:text-2xl", children: "Science 2022" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 2xl:text-lg text-zinc-400", children: "Wadjah Inovasi Indonesia is located at Jl. Sultan Agung KM 02, RT 03 RW 01, Tireman Village, Rembang District, Rembang Regency, Central Java, Postal Code 59218." }),
        /* @__PURE__ */ jsxs(Link, { className: "w-fit flex items-center gap-3 text-sm lg:text-base mt-6 mb-12 lg:mb-0 lg:mt-12 pl-4 pr-2 py-2 bg-lime-400 text-zinc-800 font-semibold rounded-full group", children: [
          "Kontak Kami",
          " ",
          /* @__PURE__ */ jsx("div", { className: "p-1 bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsx(Arrow, { classname: "h-4 lg:h-5 stroke-2 text-white rotate-45 group-hover:rotate-90 transition-all duration-300" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:flex gap-10 md:gap-16 2xl:gap-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg mb-4", children: "Kontak" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Email" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "WhatsApp" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg mb-4", children: "Navigasi" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Beranda" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Marketplace" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Dashboard" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg mb-4", children: "Fitur" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Hitung Rendemen" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Histori Data" }),
          /* @__PURE__ */ jsx(Link, { className: "text-zinc-400 hover:text-white", children: "Multi Bahasa" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-16 text-xs md:text-sm text-zinc-400", children: [
      /* @__PURE__ */ jsx("p", { children: "Copyright © 2025 Descas" }),
      /* @__PURE__ */ jsx("p", { children: "WADJAH Creative & Innovate" })
    ] })
  ] });
}
export {
  Footer as F
};

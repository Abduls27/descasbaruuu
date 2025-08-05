import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { N as Navbar, A as Arrow } from "./Arrow-BBecdeKL.js";
import Feature from "./Feature-Bi3y_Jii.js";
import { F as Footer } from "./Footer-CI4yUYy7.js";
import { S as Spark } from "./Spark-w-0SionV.js";
import ImgCard from "./ImageCard-CohrGwhj.js";
import "./Language-cjBa2JN0.js";
import "react";
import "./Card-CyLBsZLn.js";
function Home({ auth }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Descas" }),
    /* @__PURE__ */ jsx(Navbar, { auth }),
    /* @__PURE__ */ jsx("div", { className: "bg-[url('img/bg-landing.png')] w-full h-screen bg-cover flex flex-col justify-end -mt-17 lg:-mt-15", children: /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-8 lg:px-16 py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white/15 backdrop-blur-xs px-4 py-2 rounded-full w-fit text-white font-light text-xs md:text-sm 2xl:text-base", children: "Wadjah Inovasi Indonesia" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 text-2xl lg:text-4xl xl:text-6xl text-white w-80 lg:w-158", children: "Memberikan Inovasi Solusi Pertanian Terkini" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 lg:mt-8 mb-6 text-zinc-200 min-w-80 lg:w-138", children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae neque a ad. Lorem ipsum dolor" }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/rendemen",
          className: "flex items-center gap-4 w-fit pl-4 pr-2 py-2 text-sm md:text-base rounded-full font-medium bg-lime-400 group",
          children: [
            "Mulai Sekarang",
            /* @__PURE__ */ jsx("span", { className: "p-1 bg-black rounded-full", children: /* @__PURE__ */ jsx(Arrow, { classname: "h-4 md:h-5 text-white stroke-2 group-hover:rotate-45 transition-all duration-200" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-4 md:mx-8 lg:mx-16 my-12 mb-24", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "h-fit flex items-center gap-3 lg:w-280 2xl:w-350 pt-4 mb-6 lg:mb-0", children: [
        /* @__PURE__ */ jsx(Spark, { className: "h-4 stroke-zinc-400" }),
        /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm 2xl:text-base text-zinc-700", children: "Siapa Kami di Descas" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-4xl leading-8 lg:leading-12 font-medium", children: "Indonesia adalah salah satu produsen singkong terbesar di Asia, namun produktivitasnya menurun karena keterbatasan teknologi, modal, manajemen budi daya, dan lemahnya posisi tawar petani." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 mb-8 lg:pr-32 text-zinc-600", children: "Petani umumnya masih mengandalkan metode konvensional seperti mematahkan atau menggigit umbi untuk menilai kualitas dan kadar pati singkong. Cara ini kurang akurat dan sering kali menyebabkan ketidaksesuaian hasil panen dengan kebutuhan industri." }),
        /* @__PURE__ */ jsx(Link, { className: "px-4 py-2 font-semibold text-sm text-zinc-800 border border-zinc-400 rounded-full", children: "Pelajari Lebih Lanjut" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col 2xl:flex-row gap-2 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-2 2xl:grow", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/singkong1.jpeg",
              alt: "petani1",
              className: "h-80 w-full bg-top object-cover rounded-xl"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/singkong2.jpeg",
              alt: "petani1",
              className: "h-80 w-full bg-top object-cover rounded-xl"
            }
          )
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Feature, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 2xl:mx-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center my-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Spark, { className: "h-5 text-lime-400" }),
          /* @__PURE__ */ jsx("p", { className: "mb-6 lg:mb-12 text-lime-400", children: "Mitra Kami" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "lg:my-8 font-medium text-2xl md:text-4xl lg:text-6xl text-center bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text", children: [
          "Mengakar Kuat, Tumbuh Bersama ",
          /* @__PURE__ */ jsx("br", {}),
          " Mitra Wadjah Berdaya"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-x-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-max flex lg:hidden justify-center items-center gap-4 mb-12 mx-4 lg:mx-24 2xl:mx-32", children: [
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani1.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani2.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani3.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani4.jpg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex justify-center items-center gap-4 mb-12 mx-4 lg:mx-24 2xl:mx-32", children: [
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani1.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani2.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani3.jpg" }),
          /* @__PURE__ */ jsx(ImgCard, { src: "img/petani4.jpg" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};

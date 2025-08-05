import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { N as Navbar } from "./Arrow-BBecdeKL.js";
import "@inertiajs/react";
import { F as Footer } from "./Footer-CI4yUYy7.js";
import { W as Whatsapp, M as Map } from "./Map-D2EzMAid.js";
import FindUsCard from "./FindUsCard-Cn74vkwM.js";
import { S as Spark } from "./Spark-w-0SionV.js";
import "./Language-cjBa2JN0.js";
import "react";
function Mail({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: classname,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" }),
        /* @__PURE__ */ jsx("path", { d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" })
      ]
    }
  ) });
}
function Rocket({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: classname,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    }
  ) });
}
function About({ auth }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { auth }),
    /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex flex-col items-center justify-center -mt-17 pt-42 pb-12 bg-zinc-800  text-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-4xl 2xl:text-5xl", children: "Tentang Kami" }),
      /* @__PURE__ */ jsx("p", { className: "w-180 mt-4 text-center text-sm 2xl:text-base text-zinc-400", children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptas esse eveniet rem molestias distinctio ab, iste ipsa obcaecati est consequatur praesentium pariatur porro." }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/img/bg-landing.png",
          alt: "bg",
          className: "h-80 2xl:min-h-140 w-3/4 object-cover mt-16 rounded-xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center my-32", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-4xl 2xl:text-5xl", children: "Mari Mengenal Descas" }),
      /* @__PURE__ */ jsx("p", { className: "w-180 mt-4 text-center text-sm 2xl:text-base text-zinc-500", children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptas esse eveniet rem molestias distinctio ab, iste ipsa obcaecati est consequatur praesentium pariatur porro." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-24 ml-20 flex gap-12", children: [
        /* @__PURE__ */ jsx(FindUsCard, { title: "Gmail", content: "lorem@gmail.com", children: /* @__PURE__ */ jsx(Mail, { classname: "h-8 fill-lime-400" }) }),
        /* @__PURE__ */ jsx(FindUsCard, { title: "WhatsApp", content: "+62 1234 5678", children: /* @__PURE__ */ jsx(Whatsapp, { classname: "h-8 text-lime-400" }) }),
        /* @__PURE__ */ jsx(FindUsCard, { title: "Lokasi", content: "Rembang, Indonesia", children: /* @__PURE__ */ jsx(Map, { classname: "h-8 text-lime-400" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-40 mx-4 md:mx-16 2xl:mx-20 flex flex-col md:flex-row justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-480 2xl:w-600 h-fit flex items-center gap-4 mt-10", children: [
        /* @__PURE__ */ jsx(Rocket, { classname: "h-10 stroke-[1.5px] stroke-lime-500" }),
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-2xl 2xl:text-4xl text-lime-500", children: "Cerita Kami" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg 2xl:text-xl font-medium text-zinc-800", children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore est, ab nostrum officia ad vitae perspiciatis dolor consequatur corporis odio culpa magnam corrupti obcaecati quam aut! Nulla cum architecto blanditiis officiis quaerat eius, nihil culpa perferendis minima cupiditate quod vitae" }),
        /* @__PURE__ */ jsx("p", { className: "my-8 text-lg 2xl:text-xl  text-zinc-500", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse veniam earum excepturi blanditiis ratione ipsa! Dolores unde odit, aliquam ad necessitatibus veritatis, praesentium sunt voluptate dolor ut vitae! Similique sunt sed dolores? Blanditiis pariatur aspernatur, et doloribus sapiente a iste incidunt culpa odit temporibus, consequuntur laborum aperiam! Dicta ab quis blanditiis reiciendis ipsa, numquam architecto consequuntur amet nam aliquam provident eum cum at." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-8", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/story.jpg",
              alt: "story",
              className: "h-72 2xl:h-96 w-94 2xl:w-130 object-cover rounded-xl"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/story2.jpg",
              alt: "story",
              className: "h-72 2xl:h-96 w-94 2xl:w-130 object-cover rounded-xl"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between mx-2 2xl:mx-4 my-8 p-16 bg-zinc-800 text-white rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 h-fit w-380 mt-10", children: [
        /* @__PURE__ */ jsx(Spark, { className: "h-8 stroke-lime-400" }),
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-2xl 2xl:text-4xl text-lime-400", children: "Pencapaian Kami" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm 2xl:text-base text-zinc-400", children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolores culpa velit repellat! Molestiae, praesentium labore. Sint accusamus laboriosam hic cumque quam esse consequuntur voluptas, numquam expedita ducimus unde quis, neque atque repudiandae! Quo molestias, similique eveniet eius fuga nulla repudiandae, iusto autem voluptates illum perferendis nisi ex nam?" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "img/achivement.jpg",
            alt: "achivement",
            className: "h-120 2xl:h-160 w-280 object-cover object-center mt-8 rounded-xl"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  About as default
};

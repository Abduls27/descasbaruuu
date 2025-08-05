import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function SampleWeightContent({ title, text }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-8 mb-12 md:mt-12 w-84 md:w-120 lg:w-164", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-extrabold text-lg md:text-xl xl:text-2xl text-zinc-800", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 font-medium text-sm md:text-base text-zinc-600", children: text })
  ] }) });
}
export {
  SampleWeightContent as default
};

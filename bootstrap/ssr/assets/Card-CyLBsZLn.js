import { jsxs, jsx } from "react/jsx-runtime";
import "react";
function Card({ title, text, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "w-fit p-2 bg-zinc-700 rounded-xl", children }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: title }),
      /* @__PURE__ */ jsx("p", { className: "w-86 2xl:w-120 mt-4 text-zinc-300", children: text })
    ] })
  ] });
}
export {
  Card as default
};

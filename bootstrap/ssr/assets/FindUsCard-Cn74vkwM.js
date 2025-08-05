import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
function FindUsCard({ children, title, content }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "p-2 bg-zinc-800 rounded-xl", children }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-semibold 2xl:text-lg", children: title }),
      /* @__PURE__ */ jsx(Link, { className: "text-zinc-500 text-xs 2xl:text-sm", children: content })
    ] })
  ] }) });
}
export {
  FindUsCard as default
};

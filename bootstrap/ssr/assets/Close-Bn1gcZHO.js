import { jsx, Fragment } from "react/jsx-runtime";
function Close({ className = "" }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18 18 6M6 6l12 12"
        }
      )
    }
  ) });
}
export {
  Close as C
};

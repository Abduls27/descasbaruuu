import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function Language({ className }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M48 112h288M192 64v48m80 336l96-224l96 224m-162.5-64h133M281.3 112S257 206 199 277S80 384 80 384"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M256 336s-35-27-72-75s-56-85-56-85"
          }
        )
      ]
    }
  ) });
}
export {
  Language as L
};

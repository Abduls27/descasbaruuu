import { jsx, Fragment } from "react/jsx-runtime";
function ImgCard({ src }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("img", { src, alt: "petani", className: "h-40 xl:h-64 2xl:w-80 object-cover rounded-xl lg:grayscale hover:grayscale-0 transition-all duration-500" }) });
}
export {
  ImgCard as default
};

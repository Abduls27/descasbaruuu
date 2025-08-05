import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { I as InputLabel } from "./InputLabel-DjpSMn3K.js";
function FormInput({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: id, value: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id,
        name,
        type,
        value,
        onChange,
        className: `w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg ${className}`
      }
    )
  ] });
}
export {
  FormInput as F
};

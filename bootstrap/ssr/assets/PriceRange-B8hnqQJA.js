import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputLabel } from "./InputLabel-DjpSMn3K.js";
import "react";
function PriceRange({ onChange, value, label }) {
  const hargaOptions = [
    1e3,
    1100,
    1200,
    1300,
    1400,
    1500,
    1600,
    1700,
    1800,
    1900,
    2e3
  ];
  const isCustomValue = value !== "" && !hargaOptions.includes(Number(value));
  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected === "lainnya") {
      onChange("");
    } else {
      onChange(selected);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 mb-4", children: [
    /* @__PURE__ */ jsx(InputLabel, { value: label }),
    /* @__PURE__ */ jsxs(
      "select",
      {
        id: "harga",
        value: hargaOptions.includes(Number(value)) ? value : "lainnya",
        onChange: handleChange,
        className: "w-96 h-10 px-2 border border-zinc-200 rounded-lg focus:outline-lime-500",
        children: [
          hargaOptions.map((harga, idx) => /* @__PURE__ */ jsx("option", { value: harga, children: harga }, idx)),
          /* @__PURE__ */ jsx("option", { value: "lainnya", children: "Lainnya (isi manual)" })
        ]
      }
    ),
    value === "" || isCustomValue ? /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        placeholder: "Masukkan harga manual",
        className: "w-96 h-10 px-2 border border-zinc-200 rounded-lg focus:outline-lime-500",
        value,
        onChange: (e) => {
          onChange(e.target.value);
        }
      }
    ) : null
  ] });
}
export {
  PriceRange as default
};

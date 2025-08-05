import { jsxs, jsx } from "react/jsx-runtime";
import { S as Search } from "./Search-Cr90qL91.js";
import { useState, useRef, useEffect } from "react";
function SelectRendemen({ rendemens, value, onChange }) {
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef(null);
  rendemens.find((item) => item.id === parseInt(value));
  const filtered = rendemens.filter(
    (item) => `${item.name} ${item.code} ${item.jenis}`.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelect = (item) => {
    onChange(item.id);
    setQuery(item.code);
    setShowOptions(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (!value) setQuery("");
  }, [value]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full", ref: wrapperRef, children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pilih Hasil Rendemen" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pr-4 border border-zinc-200 rounded-lg focus-within:outline focus-within:outline-lime-400", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "w-full px-4 py-2 focus:outline-none placeholder:text-sm",
            placeholder: "Cari berdasarkan nama, kode, atau jenis",
            value: query,
            onChange: (e) => {
              setQuery(e.target.value);
              setShowOptions(true);
            },
            onFocus: () => setShowOptions(true)
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "h-6 stroke-2 stroke-lime-500" })
      ] }),
      showOptions && /* @__PURE__ */ jsx("ul", { className: "absolute z-10 mt-2 p-2 w-full max-h-52 overflow-auto bg-white border border-zinc-200 rounded-xl shadow-md", children: filtered.length === 0 ? /* @__PURE__ */ jsx("li", { className: "px-4 py-2 text-zinc-500", children: "Tidak ditemukan" }) : filtered.map((item) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "px-4 py-2 cursor-pointer hover:bg-lime-100 rounded-lg",
          onClick: () => {
            handleSelect(item);
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: item.code }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-zinc-600", children: [
              "SG: ",
              item.sg,
              " | SC: ",
              item.sc,
              "%"
            ] })
          ]
        },
        item.id
      )) })
    ] })
  ] });
}
export {
  SelectRendemen as default
};

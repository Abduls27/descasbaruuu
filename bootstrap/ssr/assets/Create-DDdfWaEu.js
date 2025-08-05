import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar } from "./DashboardSidebar-CLN_5aDl.js";
import { I as InputLabel } from "./InputLabel-DjpSMn3K.js";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RendemenPDF from "./RendemenPDF-DFQjWMMc.js";
import { C as Close } from "./Close-Bn1gcZHO.js";
import { route } from "ziggy-js";
import { F as FormInput } from "./FormInput-ByPmqShd.js";
import "./Language-cjBa2JN0.js";
function Download({ className = "" }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  ) });
}
function Check({ className = "" }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
          clipRule: "evenodd"
        }
      )
    }
  ) });
}
function RendemenCreate() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [jenis, setJenis] = useState("");
  const [wo, setWO] = useState("");
  const [wu, setWU] = useState("");
  const [sg, setSG] = useState(null);
  const [sc, setSC] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [showModal2, setShowModal2] = useState(null);
  const calculate = () => {
    const woVal = parseFloat(wo);
    const wuVal = parseFloat(wu);
    const sgResult = woVal / (woVal - wuVal);
    const scResult = (sgResult - 1.00906) / 4845e-6;
    setSG(sgResult.toFixed(2));
    setSC(scResult.toFixed(2));
    setShowModal(true);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(route("rendemen.store"), {
        name,
        date,
        jenis,
        wo,
        wu,
        sg,
        sc
      });
      console.log("Sukses:", response.data);
      setShowModal(false);
      setShowModal2(true);
    } catch (error) {
      console.error("Gagal simpan:", error);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "flex", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center grow m-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center md:w-108 my-8 2xl:my-12 md:mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl 2xl:text-2xl", children: "Hitung Rendemen Singkong" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-zinc-500 text-sm 2xl:text-base", children: [
            "Hitung rendemen singkong Menggunakan Website DESCAS oleh",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Wadjah Inovasi Indonesia" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Nama",
              name: "name",
              value: name,
              onChange: (e) => setName(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "date", value: "Tanggal" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "date",
                type: "date",
                name: "date",
                value: date,
                onChange: (e) => setDate(e.target.value),
                className: "w-96 h-10 mt-2 px-2 border border-zinc-200 focus:outline-lime-500 rounded-lg"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Jenis Singkong",
              name: "jenis",
              type: "text",
              value: jenis,
              onChange: (e) => setJenis(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Berat Singkong di Udara (Wo)",
              name: "wo",
              type: "number",
              value: wo,
              onChange: (e) => setWO(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Berat Singkong di Air (Wu)",
              name: "wu",
              type: "number",
              value: wu,
              onChange: (e) => setWU(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: calculate,
            className: "w-96 mt-6 bg-lime-500 hover:bg-lime-600 font-semibold hover:text-white px-6 py-2 rounded-lg cursor-pointer",
            children: "Hitung Rendemen"
          }
        )
      ] }),
      showModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/20 flex justify-center items-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg w-128", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/logo.png",
            alt: "logo",
            className: "h-20 2xl:h-24"
          }
        ) }),
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg 2xl:text-xl", children: "Hasil Perhitungan Rendemen Singkong" }),
        /* @__PURE__ */ jsx("h2", { className: "text-zinc-500 text-sm 2xl:text-base", children: "Detail informasi perhitungan rendemen singkong Menggunakan Website DESCAS oleh Wadjah Inovasi Indonesia" }),
        /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm text-zinc-500", children: "Nama" }),
            /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-base font-semibold", children: name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm text-zinc-500", children: "Tanggal" }),
            /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-base font-semibold", children: date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm text-zinc-500", children: "Jenis Singkong" }),
            /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-base font-semibold", children: jenis })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm text-zinc-500", children: "SG (Specific Grafity)" }),
            /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-base font-semibold", children: sg })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm text-zinc-500", children: "SC (Starch Content)" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 px-4 py-2 font-semibold", children: [
              sc,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-2 mt-6 font-semibold no-print", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowModal(false),
              className: "grow py-2 text-sm 2xl:text-base text-zinc-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-lg cursor-pointer",
              children: "Batalkan"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleSubmit(),
              className: "grow py-2 text-sm 2xl:text-base hover:text-white  bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer",
              children: "Simpan Hasil"
            }
          )
        ] })
      ] }) }),
      showModal2 && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black/50 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow-lg w-128", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowModal2(false),
            className: "p-2 rounded-lg bg-zinc-50 hover:bg-red-600 group",
            children: /* @__PURE__ */ jsx(Close, { className: "h-6 stroke-2 stroke-zinc-600 group-hover:stroke-white" })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center my-8", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-24 fill-green-500" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-lg font-bold text-center my-4", children: [
            "Hasil Perhitungan Rendemen ",
            /* @__PURE__ */ jsx("br", {}),
            " Berhasil Disimpan"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          PDFDownloadLink,
          {
            document: /* @__PURE__ */ jsx(
              RendemenPDF,
              {
                name,
                date,
                jenis,
                sg,
                sc
              }
            ),
            fileName: "hasil-rendemen.pdf",
            children: ({ loading }) => loading ? "Menyiapkan PDF..." : /* @__PURE__ */ jsxs("button", { className: "w-full flex justify-center items-center gap-4 px-4 py-2 bg-blue-100 hover:bg-blue-600 hover:text-white rounded-lg group cursor-pointer", children: [
              "Unduh Hasil Rendemen",
              /* @__PURE__ */ jsx(Download, { className: "h-6 fill-zinc-600 group-hover:fill-white" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/rendemen",
            className: "flex justify-center grow mt-4 px-4 py-2 bg-lime-500 hover:bg-lime-600 hover:text-white font-semibold rounded-lg",
            children: "Lanjutkan"
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  RendemenCreate as default
};

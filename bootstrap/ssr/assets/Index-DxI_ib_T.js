import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar } from "./DashboardSidebar-CLN_5aDl.js";
import SampleWeightContent from "./SampleWeightContent-DVgdVYZy.js";
import "./Language-cjBa2JN0.js";
import "@inertiajs/react";
import "react";
function SampleWeightIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "grow py-4 xl:py-8 2xl:py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-84 lg:w-190", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-extrabold text-xl md:text-3xl xl:text-4xl text-zinc-800", children: "Berat Sampel: Cara Mengukur Berat Singkong Berdasarkan Kondisi Pengukuran" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium text-sm md:text-base text-zinc-500", children: "Tata cara menghitung berat singkong berdasarkan kondisi pengukuran saat di udara dan direndam di air untuk mendapatkan hasil perhitungan rendemen yang akurat" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/bgsample.jpg",
              alt: "bgsample",
              className: "my-4 rounded-xl"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          SampleWeightContent,
          {
            title: "1. Langkah Pertama",
            text: "Membersihkan sampel singkong dari kotoran sisa-sisa tanah dan di potong-potong dengan ukuran cukup untuk dimasukkan keranjang."
          }
        ),
        /* @__PURE__ */ jsx(
          SampleWeightContent,
          {
            title: "2. Langkah Kedua",
            text: " Menyusun keranjang di pengait timbangan digital dan menset timbangan ke angka NOL (Berat keranjang di-nol-kan)."
          }
        ),
        /* @__PURE__ */ jsx(
          SampleWeightContent,
          {
            title: "3. Langkah Ketiga",
            text: "Menimbang sampel singkong sekitar 5.000 gr (5 kg) dalam kondisi keranjang di udara (Wo)."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-fit", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/udara.jpg",
              alt: "udara",
              className: "max-h-120 rounded-xl"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-center italic text-zinc-500", children: "Pengukuran di udara" })
        ] }),
        /* @__PURE__ */ jsx(
          SampleWeightContent,
          {
            title: "4. Langkah Keempat",
            text: "Menimbang sampel singkong (yang sudah disiapkan langkah ke-3) dalam kondisi keranjang di air (Wu) . Pastikan semua bagian singkong dan keranjang tercelup dalam air."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-fit", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "img/air.jpg",
              alt: "udara",
              className: "max-h-110 rounded-xl"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-center italic text-zinc-500", children: "Pengukuran di dalam air" })
        ] }),
        /* @__PURE__ */ jsx(
          SampleWeightContent,
          {
            title: "5. Langkah Kelima",
            text: "Mencatat Wo dan Wu untuk nantinya diinputkan dalam hitungan."
          }
        )
      ] })
    ] })
  ] });
}
export {
  SampleWeightIndex as default
};

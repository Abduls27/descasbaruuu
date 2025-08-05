import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DashboardNavbar } from "./DashboardNavbar-D6msWWd2.js";
import { D as DashboardSidebar } from "./DashboardSidebar-CLN_5aDl.js";
import { F as FormInput } from "./FormInput-ByPmqShd.js";
import PriceRange from "./PriceRange-B8hnqQJA.js";
import { useState } from "react";
import axios from "axios";
import SelectRendemen from "./SelectRendemen-B7mAZZ-Q.js";
import { I as InputLabel } from "./InputLabel-DjpSMn3K.js";
import "./Language-cjBa2JN0.js";
import "@inertiajs/react";
import "./Search-Cr90qL91.js";
function CreateSale({ rendemens, response }) {
  const [form, setForm] = useState({
    name: "",
    nik: "",
    address: "",
    maps: "",
    email: "",
    land: "",
    number: "",
    price: "",
    weight: "",
    reflaction: "true",
    rendemen_id: ""
  });
  const [showModal, setShowModal] = useState(null);
  const [img, setImg] = useState(null);
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    var _a;
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (img) {
      formData.append("img", img);
    }
    try {
      const response2 = await axios.post(route("sale.store"), formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (response2.data.redirect) {
        window.location.href = response2.data.redirect;
      }
    } catch (error) {
      console.error(((_a = error.response) == null ? void 0 : _a.data) || error.message);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DashboardNavbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "flex justify-between mb-12", children: [
      /* @__PURE__ */ jsx(DashboardSidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center grow m-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center md:w-108 my-8 2xl:my-12 md:mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl 2xl:text-2xl", children: "Jual Singkong" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-zinc-500 text-sm 2xl:text-base", children: [
            "Jual singkong Menggunakan Website DESCAS ",
            /* @__PURE__ */ jsx("br", {}),
            " oleh",
            " ",
            "",
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Wadjah Inovasi Indonesia" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Nama Penjual",
                name: "name",
                value: form.name,
                onChange: (e) => handleChange("name", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "NIK",
                name: "nik",
                value: form.nik,
                onChange: (e) => handleChange("nik", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Alamat Penjual",
                name: "address",
                value: form.address,
                onChange: (e) => handleChange("address", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Google Maps Lokasi",
                name: "maps",
                value: form.maps,
                onChange: (e) => handleChange("maps", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Email",
                name: "email",
                value: form.email,
                onChange: (e) => handleChange("email", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Nomor WhatsApp",
                name: "number",
                value: form.number,
                onChange: (e) => handleChange("number", e.target.value)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(InputLabel, { value: "Gambar Singkong" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  onChange: handleFileChange,
                  className: "block w-full mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Jenis Tanah",
                name: "text",
                value: form.land,
                onChange: (e) => handleChange("land", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              PriceRange,
              {
                label: "Harga Singkong (Rp)",
                value: form.price,
                onChange: (val) => handleChange("price", val)
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Kapasitas Singkong (Ton)",
                name: "weight",
                value: form.weight,
                onChange: (e) => handleChange("weight", e.target.value)
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { value: "Refleksi Singkong" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "reflaction",
                  value: form.reflaction,
                  onChange: (e) => handleChange(
                    "reflaction",
                    e.target.value
                  ),
                  className: "w-full mt-2 px-4 py-2 border border-zinc-200 rounded-lg focus:outline-lime-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "true", children: "Ya" }),
                    /* @__PURE__ */ jsx("option", { value: "false", children: "Tidak" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              SelectRendemen,
              {
                rendemens,
                value: form.rendemen_id,
                onChange: (val) => setForm((prev) => ({
                  ...prev,
                  rendemen_id: val
                }))
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowModal(true),
              className: "w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer",
              children: "Jual Singkong"
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
          /* @__PURE__ */ jsxs("div", { className: "my-12 flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg 2xl:text-xl", children: "Jual Singkong" }),
            /* @__PURE__ */ jsx("h2", { className: "w-82 mt-2 text-center text-zinc-500 text-sm 2xl:text-base", children: "Apakah Anda yakin ingin menjual singkong? Pastikan data yang dimasukkan sudah benar" })
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
                onClick: (e) => handleSubmit(e),
                className: "grow py-2 text-sm 2xl:text-base text-white  bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer",
                children: "Jual Singkong"
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  CreateSale as default
};

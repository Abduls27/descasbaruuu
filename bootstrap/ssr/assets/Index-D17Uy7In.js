import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar, A as Arrow } from "./Arrow-BBecdeKL.js";
import { C as Close } from "./Close-Bn1gcZHO.js";
import { M as Map, W as Whatsapp } from "./Map-D2EzMAid.js";
import { S as Search } from "./Search-Cr90qL91.js";
import { router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./Language-cjBa2JN0.js";
function ShopIndex({ shops, auth, search }) {
  const [showModal, setShowModal] = useState(null);
  const [query, setQuery] = useState(search || "");
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.get(
        route("shop.index"),
        { search: query },
        {
          preserveState: true,
          replace: true,
          preserveScroll: true
        }
      );
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);
  const [filters, setFilters] = useState({
    minWeight: "",
    maxWeight: "",
    minPrice: "",
    maxPrice: "",
    reflaction: ""
    // "ya", "tidak", ""
  });
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const filteredShops = shops.filter((shop) => {
    const withinWeight = (!filters.minWeight || shop.weight >= filters.minWeight) && (!filters.maxWeight || shop.weight <= filters.maxWeight);
    const withinPrice = (!filters.minPrice || shop.price >= filters.minPrice) && (!filters.maxPrice || shop.price <= filters.maxPrice);
    const matchesReflaction = filters.reflaction === "" ? true : filters.reflaction === "ya" ? shop.reflaction === "true" : shop.reflaction === "false";
    return withinWeight && withinPrice && matchesReflaction;
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { auth }),
    /* @__PURE__ */ jsxs("section", { className: "bg-[url('img/bg-shop.png')] w-full h-screen bg-center lg:bg-top bg-cover flex flex-col justify-center lg:justify-between px-4 md:px-8 2xl:px-16 pt-32 2xl:pt-64 pb-16 -mt-14 lg:-mt-15", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-4xl xl:text-6xl text-white w-72 lg:w-178", children: "Solusi Jual Beli Singkong Langsung dari Petani" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center lg:gap-4 mt-6 lg:mt-0", children: [
          /* @__PURE__ */ jsx(Arrow, { classname: "h-8 md:h-10 text-white stroke-[1.5px] rotate-90 transition-all duration-200" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 lg:mt-8 mb-6 font-medium text-sm lg:text-base text-zinc-200 w-74 lg:w-138", children: "Berjualan dan belanja singkong langsung dari petani kini jadi lebih mudah melalui Toko pada website Descas oleh Wadjah Inovasi Indonesia" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "toko",
          className: "flex lg:justify-center items-center gap-1 group mt-8 lg:mt-0",
          children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/shop#toko",
                className: "flex items-center gap-4 w-fit px-10 py-3 text-xs md:text-sm rounded-full font-semibold bg-lime-100 group-hover:bg-lime-300",
                children: "Mulai Belanja"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "p-2 bg-lime-100 group-hover:bg-lime-300 rounded-full", children: /* @__PURE__ */ jsx(Arrow, { classname: "h-4 md:h-6 text-black stroke-[1.5px] group-hover:rotate-90 transition-all duration-200" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "mx-4 md:mx-8 my-12 mb-24 flex gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-58 2xl:w-78 h-fit p-4 lg:p-6 bg-white rounded-lg drop-shadow-xl mb-8 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border border-lime-200 focus-within:outline-[1.5px] focus-within:outline-lime-500 rounded-lg px-2 py-2", children: [
          /* @__PURE__ */ jsx(Search, { className: "h-5 stroke-[1.5px] stroke-lime-500" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              placeholder: "Cari produk",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              className: "w-full focus:outline-none text-sm placeholder:text-xs"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-zinc-800 mb-2", children: "Berat Singkong (kg)" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "minWeight",
                placeholder: "Min",
                value: filters.minWeight,
                onChange: handleFilterChange,
                className: "w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "maxWeight",
                placeholder: "Max",
                value: filters.maxWeight,
                onChange: handleFilterChange,
                className: "w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-zinc-800 mt-4 mb-1", children: "Rentang Harga (Rp)" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "minPrice",
                placeholder: "Min",
                value: filters.minPrice,
                onChange: handleFilterChange,
                className: "w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "maxPrice",
                placeholder: "Max",
                value: filters.maxPrice,
                onChange: handleFilterChange,
                className: "w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-zinc-800", children: "Jenis Reflaksi" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              name: "reflaction",
              value: filters.reflaction,
              onChange: handleFilterChange,
              className: "w-full border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm mt-1",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Semua" }),
                /* @__PURE__ */ jsx("option", { value: "ya", children: "Ya" }),
                /* @__PURE__ */ jsx("option", { value: "tidak", children: "Tidak" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4", children: [
        filteredShops.map((shop) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-4 bg-white rounded-xl drop-shadow-xl",
            onClick: () => setShowModal(shop),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/cassava/${shop.img}`,
                  alt: shop.img,
                  className: "lg:h-52 2xl:h-64 lg:w-52 2xl:w-64 object-center object-cover rounded-lg"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-semibold lg:text-lg", children: shop.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm lg:text-base text-zinc-400", children: shop.address.length > 20 ? shop.address.slice(0, 20) + "..." : shop.address }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxs("h1", { className: "font-bold text-lg lg:text-xl 2xl:text-2xl text-lime-600", children: [
                    "Rp.",
                    shop.price
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs 2xl:text-sm text-zinc-400", children: "Rentang Harga" })
                ] })
              ] })
            ]
          },
          shop.id
        )),
        showModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/40 flex justify-center items-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-xl max-w-5xl relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl", children: "Detail Produk Singkong" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowModal(null),
                className: "p-2 bg-zinc-100 hover:bg-red-500 rounded-lg group cursor-pointer",
                children: /* @__PURE__ */ jsx(Close, { className: "h-4 stroke-2 stroke-zinc-500 group-hover:stroke-white" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-6 my-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: `/cassava/${showModal.img}`,
                alt: showModal.img,
                className: "w-120 h-64 object-cover rounded-lg mb-4"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs 2xl:text-sm text-zinc-500", children: "Nama Petani" }),
                /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: showModal.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-600 mb-2 lg:w-100", children: showModal.address }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: showModal.maps,
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(
                          Map,
                          {
                            classname: "h-5 stroke-1 text-lime-500"
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-lime-500", children: "Buka Google Maps" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: `https://wa.me/${showModal.number}`,
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(
                          Whatsapp,
                          {
                            classname: "h-4 stroke-1 text-lime-500"
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-lime-500", children: "Hubungi Petani" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-1 text-xs 2xl:text-sm text-zinc-400", children: "Rentang Harga" }),
                /* @__PURE__ */ jsxs("h1", { className: "font-bold text-lg lg:text-2xl 2xl:text-3xl text-lime-600", children: [
                  "Rp.",
                  showModal.price
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm lg:text-base", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-base text-zinc-800 mb-1", children: "Deskripsi Produk" }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "Jenis Tanah :" }),
                  " ",
                  showModal.land
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "Reflaksi :" }),
                  " ",
                  showModal.reflaction === true ? "ya" : "tidak"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-zinc-400", children: "Berat :" }),
                  " ",
                  showModal.weight,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-zinc-500", children: "Kg" })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowModal(false),
              className: "px-4 py-2 bg-zinc-100 hover:bg-red-500 hover:text-white text-zinc-600 rounded-lg text-sm",
              children: "Tutup"
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ShopIndex as default
};

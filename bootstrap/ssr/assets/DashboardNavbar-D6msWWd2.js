import { jsxs, jsx } from "react/jsx-runtime";
import { L as Language } from "./Language-cjBa2JN0.js";
import { usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
function DashboardNavbar() {
  const user = usePage().props.auth.user;
  const [open, setOpen] = useState(null);
  const toggleDropdown = () => {
    setOpen((prev) => prev === null ? true : !prev);
  };
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `flex justify-between lg:justify-normal items-center mx-2 px-8 py-3 sticky top-4 z-50 rounded-xl transition-colors duration-300 drop-shadow-lg ${isSticky ? "bg-zinc-800/80 text-white" : "bg-white text-zinc-800"}`,
      children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: "/img/logo.png", alt: "logo", className: "h-8" }),
          /* @__PURE__ */ jsx("h1", { className: "font-semibold", children: "Descas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden w-full lg:flex justify-center items-center font-medium", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/",
              className: "px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500",
              children: "Beranda"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/#fitur",
              className: "px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500",
              children: "Fitur"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/shop",
              className: "px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500",
              children: "Toko"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/about",
              className: "px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500",
              children: "Tentang"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative text-left", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleDropdown,
                className: "flex items-center gap-2 font-medium text-sm mr-4 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(Language, { className: "h-5 stroke-36 stroke-white" }),
                  " ",
                  "Bahasa"
                ]
              }
            ),
            open && /* @__PURE__ */ jsx("div", { className: "absolute right-0 z-10 mt-6 w-32 rounded-lg shadow-lg bg-white/15 backdrop-blur-xs", children: /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Indonesia" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "English" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Thai" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "block sm:hidden relative", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowingNavigationDropdown(
                (previousState) => !previousState
              ),
              className: "rounded-lg p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  className: "h-6 w-6",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        className: !showingNavigationDropdown ? "block" : "hidden",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 6h16M4 12h16M4 18h16"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        className: showingNavigationDropdown ? "block" : "hidden",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: (showingNavigationDropdown ? "block" : "hidden") + " absolute right-0 mt-2 w-72 rounded-xl z-50",
              children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `absolute right-0 w-72 mt-8 p-4 rounded-xl transition-colors duration-300
        ${isSticky ? "bg-zinc-800/80 text-white" : "bg-white text-gray-800"}`,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/",
                          className: "px-4 py-2 font-semibold hover:bg-lime-500 rounded-xl",
                          children: "Beranda"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/#fitur",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Fitur"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/shop",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Toko"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/about",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Tentang"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 border-t border-zinc-200 mt-4 py-4", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium text-zinc-400 text-xs ml-4", children: "Menu Dashboard" }),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/dashboard",
                          className: "px-4 py-2 font-semibold hover:bg-lime-500 rounded-xl",
                          children: "Dashboard"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/rendemen",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Hitung Rendemen"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/sale",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Jual Produk"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: "/sample",
                          className: "px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl",
                          children: "Berat Sampel"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 py-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "text-base font-semibold ", children: [
                          "Hi, ",
                          user.name
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-zinc-400", children: user.email })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-1", children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          method: "post",
                          href: route("logout"),
                          as: "button",
                          className: "w-full px-4 py-2 bg-red-200 hover:bg-red-500 rounded-xl text-red-800 font-semibold",
                          children: "Log Out"
                        }
                      ) })
                    ] })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  DashboardNavbar as D
};

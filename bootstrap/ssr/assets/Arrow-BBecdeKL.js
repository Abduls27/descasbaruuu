import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { L as Language } from "./Language-cjBa2JN0.js";
import { usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
function Navbar({ auth }) {
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
      className: `sticky top-4 flex justify-between items-center mx-2 px-4 py-2 lg:py-3  lg:mx-4 z-50 rounded-full transition-colors duration-300 ${isSticky ? "bg-zinc-800" : "bg-transparent text-zinc-800"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: "img/logo.png", alt: "", className: "h-7" }),
          /* @__PURE__ */ jsx("h1", { className: "font-medium text-lg text-white", children: "Descas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-12 text-white", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-lime-500", children: "Beranda" }),
          /* @__PURE__ */ jsx(Link, { href: "/#fitur", className: "hover:text-lime-500", children: "Fitur" }),
          /* @__PURE__ */ jsx(Link, { href: "/shop", className: "hover:text-lime-500", children: "Toko" }),
          /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:text-lime-500", children: "Tentang" })
        ] }),
        auth.user ? /* @__PURE__ */ jsx(
          Link,
          {
            href: route("dashboard"),
            className: "hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400 font-medium text-sm",
            children: "Dashboard"
          }
        ) : /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-block text-left", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleDropdown,
                className: "flex items-center gap-2 font-medium text-sm mr-4 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(Language, { className: "h-5 stroke-36 " }),
                  " Bahasa"
                ]
              }
            ),
            open && /* @__PURE__ */ jsx("div", { className: "absolute right-0 z-10 mt-2 w-32 rounded-lg shadow-lg bg-white/15 backdrop-blur-xs", children: /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Indonesia" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "English" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Thai" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("login"),
              className: "flex items-center gap-2 px-4 py-2 rounded-full text-zinc-800 bg-lime-400 font-semibold text-sm",
              children: "Masuk"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex lg:hidden items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative text-left", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleDropdown,
                className: "flex items-center gap-2 font-medium text-sm mr-4 cursor-pointer text-white",
                children: [
                  /* @__PURE__ */ jsx(Language, { className: "h-5 stroke-36 text-white" }),
                  " Bahasa"
                ]
              }
            ),
            open && /* @__PURE__ */ jsx("div", { className: "absolute right-0 z-10 mt-6 w-32 rounded-lg shadow-lg bg-white/15 backdrop-blur-xs", children: /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Indonesia" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "English" }),
              /* @__PURE__ */ jsx("button", { className: "flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer", children: "Thai" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "block lg:hidden relative", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowingNavigationDropdown(
                (previousState) => !previousState
              ),
              className: "rounded-lg p-2 text-white transition duration-150 ease-in-out hover:bg-zinc-100 hover:text-zinc-500 focus:bg-zinc-100 focus:text-zinc-500 focus:outline-none",
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
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `absolute right-0 w-72 mt-8 p-4 rounded-xl transition-colors duration-300
                    ${isSticky ? "bg-zinc-800/80 text-white" : "bg-white text-gray-800"}`,
                  children: auth.user ? /* @__PURE__ */ jsxs("div", { children: [
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
                  ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
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
                    ),
                    /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-1", children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: route("login"),
                        as: "button",
                        className: "w-full px-4 py-2 bg-lime-400 hover:bg-lime-500 rounded-xl text-white font-semibold",
                        children: "Masuk"
                      }
                    ) })
                  ] })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function Arrow({ classname }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: classname,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18L18 6m0 0H9m9 0v9"
        }
      )
    }
  ) });
}
export {
  Arrow as A,
  Navbar as N
};

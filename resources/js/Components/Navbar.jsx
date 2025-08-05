import Language from "@/Icons/Language";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ auth }) {
    const user = usePage().props.auth.user;
    const { t, i18n } = useTranslation();

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [openLang, setOpenLang] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const currentPath = window.location.pathname;
    const isAboutPage = currentPath === "/about";

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLangDropdown = () => {
        setOpenLang((prev) => !prev);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        setOpenLang(false);
    };

    const langTextColor = isAboutPage
        ? "text-white"
        : isSticky
        ? "text-white"
        : "text-zinc-800";

    return (
        <nav
            className={`sticky top-4 flex justify-between items-center mx-2 px-4 py-2 lg:py-3 lg:mx-4 z-50 rounded-full transition-colors duration-300 ${
                isSticky
                    ? "bg-zinc-800 text-white"
                    : "bg-transparent text-white"
            }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src="/img/logo.png" alt="" className="h-7" />
                <h1 className="font-medium text-lg text-white">Descas</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-12">
                <Link href="/" className="hover:text-lime-500">
                    {t("homeNav")}
                </Link>
                <Link href="/#fitur" className="hover:text-lime-500">
                    {t("featureNavTitle")}
                </Link>
                <Link href="/shop" className="hover:text-lime-500">
                    {t("marketNav")}
                </Link>
                <Link href="/about" className="hover:text-lime-500">
                    {t("about")}
                </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 relative">
                {/* Language Switcher */}
                <button
                    onClick={toggleLangDropdown}
                    className={`flex items-center gap-2 font-medium text-sm cursor-pointer ${langTextColor}`}
                >
                    <Language className={`h-5 stroke-36 ${langTextColor}`} />
                    {t("language")}
                </button>

                {openLang && (
                    <div className="absolute right-10 lg:right-24 z-50 mt-44 lg:mt-42 w-32 rounded-lg shadow-lg bg-white/60 backdrop-blur-xs">
                        <div className="p-1">
                            <button
                                onClick={() => changeLanguage("id")}
                                className="flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer"
                            >
                                Indonesia
                            </button>
                            <button
                                onClick={() => changeLanguage("en")}
                                className="flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer"
                            >
                                English
                            </button>
                            <button
                                onClick={() => changeLanguage("th")}
                                className="flex w-full px-4 py-2 text-sm text-zinc-800 hover:bg-lime-400 rounded-lg cursor-pointer"
                            >
                                Thai
                            </button>
                        </div>
                    </div>
                )}

                {/* Auth Buttons */}
                {auth.user ? (
                    <Link
                        href="/dashboard"
                        className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400 font-medium text-zinc-800 text-sm"
                    >
                        {t("dashBtn")}
                    </Link>
                ) : (
                    <Link
                        href={route("login")}
                        className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-zinc-800 bg-lime-400 font-semibold text-sm"
                    >
                        {t("loginBtn")}
                    </Link>
                )}

                {/* Mobile Hamburger */}
                <div className="block lg:hidden relative">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown((prev) => !prev)
                        }
                        className="rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "hidden"
                                        : "block"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "block"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {showingNavigationDropdown && (
                <div className="absolute right-4 mt-82 w-72 z-50">
                    <div
                        className={`mt-8 p-4 rounded-xl transition-colors duration-300 ${
                            isSticky
                                ? "bg-zinc-800/80 text-white"
                                : "bg-white text-gray-800"
                        }`}
                    >
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="px-4 py-2 font-semibold hover:bg-lime-500 rounded-xl"
                            >
                                {t("homeNav")}
                            </Link>
                            <Link
                                href="/#fitur"
                                className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                            >
                                {t("featureNavTitle")}
                            </Link>
                            <Link
                                href="/shop"
                                className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                            >
                                {t("marketNav")}
                            </Link>
                            <Link
                                href="/about"
                                className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                            >
                                {t("about")}
                            </Link>
                        </div>

                        {auth.user ? (
                            <>
                                <div className="flex flex-col gap-4 border-t border-zinc-200 mt-4 py-4">
                                    <p className="font-medium text-zinc-400 text-xs ml-4">
                                        {t("dashMenu")}
                                    </p>
                                    <Link
                                        href="/dashboard"
                                        className="px-4 py-2 font-semibold hover:bg-lime-500 rounded-xl"
                                    >
                                        {t("dashBtn")}
                                    </Link>
                                    <Link
                                        href="/rendemen"
                                        className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                                    >
                                        {t("calcBtn")}
                                    </Link>
                                    <Link
                                        href="/sale"
                                        className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                                    >
                                        {t("saleTitle")}
                                    </Link>
                                    <Link
                                        href="/sample"
                                        className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                                    >
                                        {t("sampleBtn")}
                                    </Link>
                                </div>

                                <div className="border-t border-gray-200 py-4">
                                    <div className="px-4">
                                        <div className="text-base font-semibold">
                                            Hi, {user.name}
                                        </div>
                                        <div className="text-sm font-medium text-zinc-400">
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="mt-3 space-y-1">
                                        <Link
                                            method="post"
                                            href={route("logout")}
                                            as="button"
                                            className="w-full px-4 py-2 bg-red-200 hover:bg-red-500 rounded-xl text-red-800 font-semibold"
                                        >
                                            {t("logoutBtn")}
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="mt-4 space-y-2">
                                <Link
                                    href={route("login")}
                                    as="button"
                                    className="w-full px-4 py-2 bg-lime-400 hover:bg-lime-500 rounded-xl text-white font-semibold"
                                >
                                    {t("loginBtn")}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

import Language from "@/Icons/Language";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function DashboardNavbar() {
    const { t, i18n } = useTranslation();
    const user = usePage().props.auth.user;
    const [open, setOpen] = useState(null);
    const toggleDropdown = () => {
        setOpen((prev) => (prev === null ? true : !prev));
    };

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            // Ubah threshold sesuai kebutuhan (misalnya 40px)
            setIsSticky(offset > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        setOpen(false);
    };

    return (
        <nav
            className={`flex justify-between lg:justify-normal items-center mx-2 px-8 py-3 sticky top-4 z-50 rounded-xl transition-colors duration-300 drop-shadow-xl drop-shadow-zinc-100 ${
                isSticky
                    ? "bg-zinc-800/80 text-white"
                    : "bg-white text-zinc-800"
            }`}
        >
            <Link href="/" className="flex items-center gap-4">
                <img src="/img/logo.png" alt="logo" className="h-8" />
                <h1 className="font-semibold">Descas</h1>
            </Link>
            <div className="hidden w-full lg:flex justify-center items-center font-medium">
                <Link
                    href="/"
                    className="px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500"
                >
                    {t("homeNav")}
                </Link>
                <Link
                    href="/#fitur"
                    className="px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500"
                >
                    {t("featureNavTitle")}
                </Link>
                <Link
                    href="/shop"
                    className="px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500"
                >
                    {t("marketNav")}
                </Link>
                <Link
                    href="/about"
                    className="px-4 py-2 rounded-full hover:font-semibold hover:text-lime-500"
                >
                    {t("about")}
                </Link>
            </div>

            <div className="flex items-center">
                {/* bahasa */}
                <div className="relative text-left">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 font-medium text-sm mr-4 cursor-pointer"
                    >
                        <Language className="h-5 stroke-36 stroke-white" />{" "}
                        {t("language")}
                    </button>

                    {open && (
                        <div className="absolute right-0 z-10 mt-6 w-32 rounded-lg shadow-lg bg-white/15 backdrop-blur-xs">
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
                </div>

                {/* responsive button */}
                <div className="block sm:hidden relative">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="rounded-lg p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "block"
                                        : "hidden"
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

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " absolute right-0 mt-2 w-72 rounded-xl z-50"
                    }
                >
                    <div
                        className={`absolute right-0 w-72 mt-8 p-4 rounded-xl transition-colors duration-300
        ${isSticky ? "bg-zinc-800/80 text-white" : "bg-white text-gray-800"}`}
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

                        <div className="flex flex-col gap-4 border-t border-zinc-200 mt-4 py-4">
                            <p className="font-medium text-zinc-400 text-xs ml-4">
                                Menu Dashboard
                            </p>
                            <Link
                                href="/dashboard"
                                className="px-4 py-2 font-semibold hover:bg-lime-500 rounded-xl"
                            >
                                Dashboard
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
                                href="/farmer"
                                className="px-4 py-2 font-semibold hover:bg-lime-400 rounded-xl"
                            >
                                {t("farmerBtn")}
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
                                <div className="text-base font-semibold ">
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
                    </div>
                </div>
            </div>
        </nav>
    );
}

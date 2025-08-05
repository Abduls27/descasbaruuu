import { Link, router, usePage } from "@inertiajs/react";
import Home from "@/Icons/Home";
import Calculate from "@/Icons/Calculate";
import Sale from "@/Icons/Sale";
import Sample from "@/Icons/Sample";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@/Icons/LogoutIcon";
import Manage from "@/Icons/Manage";

export default function DashboardSidebar() {
    const { url, props } = usePage();
    const { t } = useTranslation();

    const userRole = props.auth?.user?.role;

    function handleLogout(e) {
        e.preventDefault();
        router.post("/logout", {
            preserveState: false,
        });
    }

    const linkClass = (path) =>
        url.startsWith(path)
            ? "w-full flex items-center gap-2 px-4 py-2 bg-lime-500 font-semibold text-white rounded-lg"
            : "w-full flex items-center gap-2 px-4 py-2 font-semibold text-zinc-400 rounded-lg";

    const iconClass = (path) =>
        url.startsWith(path)
            ? "h-4 stroke-[1.8px] stroke-white"
            : "h-4 stroke-[1.8px] stroke-zinc-400";

    return (
        <nav className="hidden lg:block w-64 h-130 mx-2 my-6 p-4 bg-white rounded-xl drop-shadow-xl drop-shadow-zinc-100">
            <img src="/img/logo.png" alt="logo" className="h-16" />

            <div className="flex flex-col justify-between h-full py-8 pb-18">
                <div className="flex flex-col gap-2 text-sm 2xl:text-base">
                    <p className="text-xs 2xl:text-sm text-zinc-500 capitalize">{t("menu")}</p>
                    <Link href="/dashboard" className={linkClass("/dashboard")}>
                        <Home classname={iconClass("/dashboard")} />
                        <span>{t("dashBtn")}</span>
                    </Link>
                    <Link href="/rendemen" className={linkClass("/rendemen")}>
                        <Calculate classname={iconClass("/rendemen")} />
                        <span>{t("calcBtn")}</span>
                    </Link>
                    <Link href="/sale" className={linkClass("/sale")}>
                        <Sale classname={iconClass("/sale")} />
                        <span>{t("saleTitle")}</span>
                    </Link>

                    {userRole === "admin" && (
                        <Link href="/farmer" className={linkClass("/farmer")}>
                            <Manage className={iconClass("/farmer")} />
                            <span>{t("farmerBtn")}</span>
                        </Link>
                    )}

                    <Link href="/sample" className={linkClass("/sample")}>
                        <Sample className={iconClass("/sample")} />
                        <span>{t("sampleBtn")}</span>
                    </Link>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-600 font-semibold text-zinc-400 hover:text-white rounded-lg cursor-pointer group"
                >
                    <LogoutIcon className="h-5 stroke-1 group-hover:stroke-white" />
                    <span>{t("logoutBtn")}</span>
                </button>
            </div>
        </nav>
    );
}

import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import { Head } from "@inertiajs/react";
import Calculate from "@/Icons/Calculate";
import Sale from "@/Icons/Sale";
import Cassava from "@/Icons/Cassava";
import { useTranslation } from "react-i18next";

export default function Dashboard({
    auth,
    rendemens,
    totalRendemen,
    sales,
    totalSales,
    totalSalesAll,
    sg,
    sc,
    totalPetani,
    role,
}) {
    const { t, i18n } = useTranslation();
    const currentLocale =
        i18n.language === "en"
            ? "en-US"
            : i18n.language === "id"
            ? "id-ID"
            : "th-TH";

    const today = new Date().toLocaleDateString(currentLocale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-stone-50 ">
            <DashboardNavbar />
            <Head title="Dashboard" />
            <main className="flex max-w-7xl">
                <DashboardSidebar />
                <section className="lg:grow mt-8 mx-2">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center grow p-6 rounded-lg bg-zinc-100 text-zinc-800">
                        <div>
                            <h2 className="font-bold capitalize text-2xl">
                                Hai, {auth.user.name}
                            </h2>
                            <h3 className="font-medium  capitalize text-zinc-400">
                                {t(`role.${auth.user.role}`)}
                            </h3>
                        </div>
                        <h1 className="font-semibold mt-4 lg:mt-0 text-sm lg:text-lg">
                            {today}
                        </h1>
                    </div>

                    <article className="flex flex-col lg:flex-row justify-between gap-2">
                        {/* hasil perhitungan */}
                        <div className="mt-2 p-4 w-full text-zinc-800 bg-zinc-100 rounded-xl">
                            <h1 className="font-semibold">
                                {t("recentRendemen")}
                            </h1>

                            {rendemens.length === 0 ? (
                                <div className="flex flex-col justify-center items-center gap-3 p-7 mt-4 bg-zinc-200 rounded-lg">
                                    <img
                                        src="img/found.svg"
                                        alt="found"
                                        className="h-42"
                                    />
                                    <div className="text-center mt-8">
                                        <h1 className="font-semibold">
                                            {t("foundTitle")}
                                        </h1>
                                        <p className="text-sm text-zinc-500 mt-2">
                                            {t("foundDesc")}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                rendemens.map((ren, index) => (
                                    <div
                                        key={ren.id}
                                        className="flex items-center gap-3 p-2 mt-4 bg-zinc-200 rounded-lg"
                                    >
                                        <img
                                            src="/img/user.svg"
                                            alt=""
                                            className="h-14"
                                        />

                                        <div className="pr-31">
                                            <h2 className="font-semibold text-zinc-600">
                                                {ren.name}
                                            </h2>
                                            <div className="flex gap-4 mt-1 text-sm font-medium">
                                                <p>
                                                    {ren.sg}{" "}
                                                    <span className="text-zinc-400">
                                                        {t("valueSg")}
                                                    </span>
                                                </p>
                                                <p>
                                                    {ren.sc}{" "}
                                                    <span className="text-zinc-400">
                                                        {t("valueSc")}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* card */}
                        <div className="mt-2 p-4 bg-zinc-100 text-zinc-800 rounded-xl">
                            <h1 className="font-semibold">{t("general")}</h1>

                            {/* container */}
                            <div className="flex flex-col lg:flex-row  gap-2 mt-4">
                                <div className="flex flex-col gap-2">
                                    {role === "petani" && (
                                        <div className="h-52 lg:w-52 flex flex-col justify-between p-4 bg-zinc-200 rounded-xl">
                                            <h4 className="font-semibold text-zinc-600 text-sm">
                                                {t("totalRen")}
                                            </h4>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm text-zinc-500 capitalize">
                                                    {t("total")}
                                                </p>
                                                <h1 className="font-light text-6xl">
                                                    {totalRendemen}
                                                </h1>
                                            </div>
                                        </div>
                                    )}

                                    {role === "admin" && (
                                        <div className="h-52 lg:w-52 flex flex-col justify-between p-4 bg-zinc-200 rounded-xl">
                                            <h4 className="font-semibold text-zinc-600 text-sm">
                                                {t("petaniTitle")}
                                            </h4>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm text-zinc-500 capitalize">
                                                    {t("total")}
                                                </p>
                                                <h1 className="font-light text-6xl">
                                                    {totalPetani}
                                                </h1>
                                            </div>
                                        </div>
                                    )}

                                    {role == "petani" && (
                                        <div className="h-32 lg:w-52 flex flex-col justify-between  p-4 bg-zinc-200 rounded-xl">
                                            <h4 className="font-semibold text-zinc-600 text-sm">
                                                {t("productSale")}
                                            </h4>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm text-zinc-500">
                                                    Total
                                                </p>
                                                <h1 className="font-light text-6xl">
                                                    {totalSales}
                                                </h1>
                                            </div>
                                        </div>
                                    )}

                                    {role == "admin" && (
                                        <div className="h-32 lg:w-52 flex flex-col justify-between  p-4 bg-zinc-200 rounded-xl">
                                            <h4 className="font-semibold text-zinc-600 text-sm">
                                                {t("productSale")}
                                            </h4>
                                            <div className="flex justify-between items-end">
                                                <p className="text-sm text-zinc-500">
                                                    Total
                                                </p>
                                                <h1 className="font-light text-6xl">
                                                    {totalSalesAll}
                                                </h1>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="h-42 lg:w-72 flex flex-col justify-between p-4 bg-zinc-200 rounded-xl">
                                        <h4 className="font-semibold text-zinc-600 text-sm">
                                            {t("valueSg")}
                                        </h4>
                                        <div className="flex justify-between items-end">
                                            <p className="text-sm text-zinc-500">
                                                {t("maxSgSc")}
                                            </p>
                                            <h1 className="font-light text-6xl">
                                                {sg ?? 0}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="h-42 lg:w-72 flex flex-col justify-between p-4 bg-zinc-200 rounded-xl">
                                        <h4 className="font-semibold text-zinc-600 text-sm">
                                            {t("valueSc")}
                                        </h4>
                                        <div className="flex justify-between items-end">
                                            <p className="text-sm text-zinc-500">
                                                {t("maxSgSc")}
                                            </p>
                                            <h1 className="font-light text-6xl">
                                                {sc ?? 0}
                                                <span className="text-base">
                                                    %
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

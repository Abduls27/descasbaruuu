import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import Sale from "@/Icons/Sale";
import Trash from "@/Icons/Trash";
import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import EditIcon from "@/Icons/EditIcon";
import Close from "@/Icons/Close";
import { useTranslation } from "react-i18next";
import Search from "@/Icons/Search";

export default function SaleIndex({ sales: initialSales }) {
    const { t } = useTranslation();
    const [sales, setSales] = useState(initialSales);
    const [query, setQuery] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            axios
                .post(route("sale.search"), {
                    search: query,
                    _token: csrfToken,
                })
                .then((res) => {
                    setSales(res.data);
                })
                .catch((err) => {
                    console.error(
                        "Search error:",
                        err.response?.data || err.message
                    );
                });
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    const handleDelete = () => {
        if (selectedId) {
            router.delete(route("sale.destroy", selectedId), {
                onSuccess: () => {
                    setOpenModal(false);
                    setSelectedId(null);

                    fetch(route("sale.search"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content"),
                        },
                        body: JSON.stringify({ search: query }),
                    })
                        .then((res) => res.json())
                        .then((data) => setSales(data));
                },
            });
        }
    };

    return (
        <div className="bg-stone-50">
            <DashboardNavbar />
            <section className="flex">
                <DashboardSidebar />
                <div className="min-w-90 lg:w-240 2xl:w-348 mx-4 py-8">
                    <div className="mb-8 p-6 rounded-lg bg-zinc-100">
                        <h1 className="font-bold text-xl md:text-2xl 2xl:text-4xl">
                            {t("saleTitle")}
                        </h1>
                        <p className="mt-2 mb-8 text-sm 2xl:text-base text-zinc-500">
                            {t("saleDesc")}
                        </p>

                        <Link
                            href="sale/create"
                            className="w-fit flex justify-center items-center gap-2 px-12 lg:px-16 py-2 lg:py-3 bg-lime-200 hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg font-semibold group"
                        >
                            <Sale classname="h-5 stroke-[1.5px] stroke-lime-900 group-hover:stroke-white" />
                            <span className="text-sm">{t("saleBtn")}</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 w-fit mb-4">
                        <h3 className="font-semibold lg:text-lg text-zinc-800">
                            {t("tabelSale")}
                        </h3>
                        <div className="flex items-center gap-2 lg:gap-4 px-4 border border-zinc-200 rounded-lg focus-within:outline focus-within:outline-lime-500">
                            <Search className="h-4 stroke-[1.5px] stroke-zinc-500" />
                            <input
                                type="text"
                                placeholder={t("salePlaceholder")}
                                className="h-10 2xl:h-12 min-w-80 py-2 focus:outline-none placeholder:text-sm"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* tabel */}
                    <div className="relative overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-max text-sm xl:text-lg text-left text-zinc-500 ">
                            <thead className="text-xs md:text-sm 2xl:text-base text-zinc-800 bg-zinc-100">
                                <tr>
                                    <th className="px-6 py-3">
                                        {t("tabName")}
                                    </th>
                                    <th className="px-6 py-3">{t("email")}</th>
                                    <th className="px-6 py-3">{t("nik")}</th>
                                    <th className="px-6 py-3">{t("wa")}</th>
                                    <th className="px-6 py-3">{t("tabAdd")}</th>
                                    <th className="px-6 py-3">Maps</th>
                                    <th className="px-6 py-3">
                                        {t("landType")}
                                    </th>
                                    <th className="px-6 py-3">
                                        {t("tabPrice")}
                                    </th>
                                    <th className="px-6 py-3">{t("reflac")}</th>
                                    <th className="px-6 py-3">{t("weight")}</th>
                                    <th className="px-6 py-3">Rendemen</th>
                                    <th className="px-6 py-3">{t("act")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sa) => (
                                    <tr
                                        key={sa.id}
                                        className="odd:bg-white even:bg-zinc-100 text-sm 2xl:text-base border-b border-zinc-200"
                                    >
                                        <th className="px-6 py-4 font-medium text-zinc-800 whitespace-nowrap">
                                            {sa.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {sa.email}
                                        </td>
                                        <td className="px-6 py-4">{sa.nik}</td>
                                        <td className="px-6 py-4">
                                            {sa.number}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sa.address}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={sa.maps}>{sa.maps}</a>
                                        </td>
                                        <td className="px-6 py-4">{sa.land}</td>
                                        <td className="px-6 py-4">
                                            {sa.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sa.reflaction
                                                ? t("trueReflac")
                                                : t("falseReflac")}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sa.weight}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sa.rendemen.code}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <Link
                                                href={`/sale/${sa.id}/edit`}
                                                className="p-2 bg-zinc-100 hover:bg-yellow-200 rounded-lg"
                                            >
                                                <EditIcon className="h-5 stroke-[1.5px] stroke-zinc-800" />
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(sa.id);
                                                    setOpenModal(true);
                                                }}
                                                className="p-2 bg-zinc-100 hover:bg-red-200 rounded-lg cursor-pointer"
                                            >
                                                <Trash className="h-5 stroke-[1.5px] stroke-zinc-800" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal delete */}
                {openModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white p-4 rounded-lg shadow-lg mx-2 lg:w-140">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-xl">
                                    {t("saleDelTitle")}
                                </h1>
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="p-2 bg-zinc-100 rounded-xl hover:bg-red-500 group cursor-pointer"
                                >
                                    <Close className="h-6 stroke-2 stroke-zinc-600 group-hover:stroke-white" />
                                </button>
                            </div>

                            <div className="my-4">
                                <h1 className="text-zinc-800 font-medium">
                                    {t("saleDelDesc")}
                                </h1>
                            </div>

                            <div className="flex justify-between gap-2 mt-6 font-semibold no-print">
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="grow py-2 text-sm 2xl:text-base text-zinc-700 hover:text-white bg-zinc-100 hover:bg-zinc-600 rounded-lg cursor-pointer"
                                >
                                    {t("cancel")}
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="grow py-2 text-sm 2xl:text-base text-white bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer"
                                >
                                    {t("saleDelTitle")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

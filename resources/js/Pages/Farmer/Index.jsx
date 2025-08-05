import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import Close from "@/Icons/Close";
import EditIcon from "@/Icons/EditIcon";
import Trash from "@/Icons/Trash";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FarmerIndex({ farmers: initialFarmers }) {
    const { t } = useTranslation();
    const [farmers, setFarmers] = useState(initialFarmers);
    const [query, setQuery] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            axios
                .post(route("farmer.search"), {
                    search: query,
                    _token: csrfToken,
                })
                .then((res) => setFarmers(res.data))
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
            router.delete(route("farmer.destroy", selectedId), {
                onSuccess: () => {
                    setOpenModal(false);
                    setSelectedId(null);

                    fetch(route("farmer.search"), {
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
                        .then((data) => setFarmers(data));
                },
            });
        }
    };

    return (
        <div className="bg-stone-50">
            <DashboardNavbar />
            <section className="flex">
                <DashboardSidebar />

                <div className="min-w-90 xl:min-w-240 mx-4 py-12">
                    <h1 className="font-bold md:text-2xl 2xl:text-4xl">
                        {t("farmTitle")}
                    </h1>
                    <p className="mt-2 mb-8 text-sm 2xl:text-base text-zinc-500">
                        {t("farmDesc")}
                    </p>

                    <div className="flex flex-col-reverse md:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            placeholder={t("farmPlaceholder")}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="h-10 2xl:h-12 min-w-80 px-4 py-2 border border-zinc-200 focus:outline-lime-500 placeholder:text-sm rounded-lg"
                        />
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm xl:text-lg text-left text-gray-500">
                            <thead className="text-xs md:text-sm 2xl:text-base text-gray-700 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">
                                        {t("farmName")}
                                    </th>
                                    <th className="px-6 py-3">{t("email")}</th>
                                    <th className="px-6 py-3">{t("act")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmers.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <Link
                                                href={`/farmer/${user.id}/edit`}
                                                className="p-2 bg-zinc-100 hover:bg-yellow-200 rounded-lg"
                                            >
                                                <EditIcon className="h-5 stroke-[1.5px] stroke-zinc-800" />
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(user.id);
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

                {openModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white p-4 rounded-lg shadow-lg lg:w-140">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-xl">
                                    {t("farmerDelTitle")}
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
                                    {t("farmerDelDec")}
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
                                    onClick={() => handleDelete(selectedId)}
                                    className="grow py-2 text-sm 2xl:text-base text-white bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer"
                                >
                                    {t("farmerDelBtn")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

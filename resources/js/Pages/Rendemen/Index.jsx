import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import { Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Calculate from "@/Icons/Calculate";
import EditIcon from "@/Icons/EditIcon";
import Trash from "@/Icons/Trash";
import Close from "@/Icons/Close";
import { useTranslation } from "react-i18next";
import Search from "@/Icons/Search";

export default function Index({ rendemens: initialData }) {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [rendemens, setRendemens] = useState(initialData);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            axios
                .post(route("rendemen.search"), {
                    search: query,
                    _token: csrfToken,
                })
                .then((res) => setRendemens(res.data))
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
            router.delete(route("rendemen.destroy", selectedId), {
                onSuccess: () => {
                    setOpenModal(false);
                    setSelectedId(null);

                    fetch(route("rendemen.search"), {
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
                        .then((data) => setRendemens(data));
                },
            });
        }
    };

    return (
        <div className="bg-stone-50">
            <DashboardNavbar />
            <section className="flex ">
                <DashboardSidebar />

                <div className="min-w-90 xl:min-w-240 mx-4 py-8">
                    <div className="mb-8 p-6 rounded-lg bg-zinc-100">
                        <h1 className="font-bold md:text-2xl 2xl:text-4xl">
                            {t("calcRenTitle")}
                        </h1>
                        <p className="mt-2 mb-8 text-sm 2xl:text-base text-zinc-500">
                            {t("calcRenDesc")}
                        </p>

                        <Link
                            href="rendemen/create"
                            className="w-fit flex justify-center items-center gap-2 px-8 lg:px-12 py-3 bg-lime-200  hover:bg-lime-600 text-lime-900 hover:text-white rounded-lg  font-semibold group"
                        >
                            <Calculate classname="h-5 stroke-[1.5px] stroke-lime-900 group-hover:stroke-white" />
                            <span className="text-sm">{t("calcBtn")}</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 w-fit mb-4">
                        <h3 className="font-semibold lg:text-lg text-zinc-800">
                            {t("tabelRende")}
                        </h3>
                        <div className="flex items-center gap-2 lg:gap-4 px-4 border border-zinc-200 rounded-lg focus-within:outline focus-within:outline-lime-500">
                            <Search className="h-4 stroke-[1.5px] stroke-zinc-500" />
                            <input
                                type="text"
                                placeholder={t("renPlaceholder")}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="h-10 2xl:h-12 min-w-80 py-2 focus:outline-none placeholder:text-sm"
                            />
                        </div>
                    </div>

                    {/* tabel */}
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="min-w-max text-sm xl:text-lg text-left text-gray-500 ">
                            <thead class="text-xs md:text-sm 2xl:text-base text-gray-700 bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        {t("tabCode")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("tabName")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("tabDate")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("casType")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("valWo")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("valWu")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("sg")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("sc")}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {t("act")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rendemens.map((ren) => (
                                    <tr
                                        key={ren.id}
                                        class="odd:bg-white even:bg-gray-50 text-sm 2xl:text-base border-b border-gray-200"
                                    >
                                        <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {ren.code}
                                        </th>
                                        <td class="px-6 py-4">{ren.name}</td>
                                        <td class="px-6 py-4">{ren.date}</td>
                                        <td class="px-6 py-4">{ren.jenis}</td>
                                        <td class="px-6 py-4">{ren.wo}</td>
                                        <td class="px-6 py-4">{ren.wu}</td>
                                        <td class="px-6 py-4">{ren.sg}</td>
                                        <td class="px-6 py-4">{ren.sc}%</td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <Link
                                                href={`/rendemen/${ren.id}/edit`}
                                                className="p-2 bg-zinc-100 hover:bg-yellow-200 rounded-lg"
                                            >
                                                <EditIcon className="h-5 stroke-[1.5px] stroke-zinc-800" />
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(ren.id);
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
                                    {t("renDelTitle")}
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
                                    {t("renDelDesc")}
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
                                    {t("renDelBtn")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

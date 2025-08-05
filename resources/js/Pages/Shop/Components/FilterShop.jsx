import ChevronDown from "@/Icons/Chevron";
import Search from "@/Icons/Search";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FilterShop({
    search,
    filters,
    onFilterChange,
    onSearchResult,
}) {
    const [query, setQuery] = useState(search || "");
    const [openWeight, setOpenWeight] = useState(null);
    const [openPrice, setOpenPrice] = useState(null);
    const [openReflaction, setOpenWReflaction] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
    const timeout = setTimeout(() => {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        axios
            .post(route("shop.search"), {
                search: query,
                _token: csrfToken,
            })
            .then((res) => {
                onSearchResult(res.data.shops);
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

    return (
        <div>
            {/* desktop */}
            <div className="hidden lg:block lg:w-58 2xl:w-78 h-fit p-4 lg:p-6 bg-white rounded-lg drop-shadow-xl mb-8 space-y-4">
                <div>
                    <div className="flex items-center gap-2 border border-lime-200 focus-within:outline-[1.5px] focus-within:outline-lime-500 rounded-lg px-2 py-2">
                        <Search
                            className={"h-5 stroke-[1.5px] stroke-lime-500"}
                        />
                        <input
                            placeholder={t("placeholderMarket")}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full focus:outline-none text-sm placeholder:text-xs"
                        />
                    </div>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-zinc-800 mb-2">
                        {t("btnWeight")}
                    </h5>
                    <div className="flex gap-2 mt-1">
                        <input
                            type="number"
                            name="minWeight"
                            placeholder={t("placeWeMin")}
                            value={filters.minWeight}
                            onChange={onFilterChange}
                            className="w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                        <input
                            type="number"
                            name="maxWeight"
                            placeholder={t("placeWeMax")}
                            value={filters.maxWeight}
                            onChange={onFilterChange}
                            className="w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                    </div>
                </div>

                <div>
                    <h5 className="text-sm font-semibold text-zinc-800 mt-4 mb-1">
                        {t("btnPrice")}
                    </h5>
                    <div className="flex gap-2 mt-1">
                        <input
                            type="number"
                            name="minPrice"
                            placeholder={t("placePrMin")}
                            value={filters.minPrice}
                            onChange={onFilterChange}
                            className="w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder={t("placePrMax")}
                            value={filters.maxPrice}
                            onChange={onFilterChange}
                            className="w-1/2 border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                    </div>
                </div>

                <div>
                    <h5 className="text-sm font-semibold text-zinc-800">
                        {t("btnReflac")}
                    </h5>
                    <select
                        name="reflaction"
                        value={filters.reflaction}
                        onChange={onFilterChange}
                        className="w-full border border-lime-200 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm mt-1"
                    >
                        <option value="">{t("allReflac")}</option>
                        <option value="ya">{t("trueReflac")}</option>
                        <option value="tidak">{t("falseReflac")}</option>
                    </select>
                </div>
            </div>

            {/* mobile */}
            <div className="block lg:hidden">
                <div className="-mt-8 mb-2">
                    <div className="flex items-center gap-2 focus-within:outline-[1.5px] focus-within:outline-lime-500 bg-zinc-50 rounded-xl px-2 py-3">
                        <Search
                            className={"h-5 stroke-[1.5px] stroke-lime-500"}
                        />
                        <input
                            placeholder={t("placehoderMarket")}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full focus:outline-none text-sm placeholder:text-xs"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                    <button
                        className="flex items-center gap-2 px-3 md:px-5 py-3 bg-zinc-100 hover:bg-lime-400 rounded-lg text-xs font-semibold"
                        onClick={() => {
                            setOpenWeight((prev) => !prev);
                            setOpenPrice(false);
                            setOpenWReflaction(false);
                        }}
                    >
                        {t("")}
                        <ChevronDown
                            className={`h-4 stroke-2 stroke-zinc-800 transition-transform duration-300 ${
                                openWeight ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <button
                        className="flex items-center gap-2 px-3 md:px-5 py-3 bg-zinc-100 hover:bg-lime-400 rounded-lg text-xs font-semibold"
                        onClick={() => {
                            setOpenPrice((prev) => !prev);
                            setOpenWeight(false);
                            setOpenWReflaction(false);
                        }}
                    >
                        {t("btnWeight")}
                        <ChevronDown
                            className={`h-4 stroke-2 stroke-zinc-800 transition-transform duration-300 ${
                                openPrice ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <button
                        className="flex items-center gap-2 px-3 md:px-5 py-3 bg-zinc-100 hover:bg-lime-400 rounded-lg text-xs font-semibold"
                        onClick={() => {
                            setOpenWReflaction((prev) => !prev);
                            setOpenWeight(false);
                            setOpenPrice(false);
                        }}
                    >
                        {t("btnReflac")}
                        <ChevronDown
                            className={`h-4 stroke-2 stroke-zinc-800 transition-transform duration-300 ${
                                openReflaction ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                </div>

                {openWeight && (
                    <div className="flex gap-2 mt-4">
                        <input
                            type="number"
                            name="minWeight"
                            placeholder={t("placeWeMin")}
                            value={filters.minWeight}
                            onChange={onFilterChange}
                            className="w-1/2 bg-zinc-50 focus:outline-lime-400 rounded-lg px-3 py-2 text-sm"
                        />
                        <input
                            type="number"
                            name="maxWeight"
                            placeholder={t("placeWeMax")}
                            value={filters.maxWeight}
                            onChange={onFilterChange}
                            className="w-1/2 bg-zinc-50 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                    </div>
                )}

                {openPrice && (
                    <div className="flex gap-2 mt-4">
                        <input
                            type="number"
                            name="minPrice"
                            placeholder={t("placePrMin")}
                            value={filters.minPrice}
                            onChange={onFilterChange}
                            className="w-1/2 bg-zinc-50 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder={t("placePrMax")}
                            value={filters.maxPrice}
                            onChange={onFilterChange}
                            className="w-1/2 bg-zinc-50 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                        />
                    </div>
                )}

                {openReflaction && (
                    <select
                        name="reflaction"
                        value={filters.reflaction}
                        onChange={onFilterChange}
                        className="w-full mt-4 bg-zinc-50 focus:outline-lime-400 rounded-lg px-2 py-2 text-sm"
                    >
                        <option value="">{t("allReflac")}</option>
                        <option value="ya">{t("trueReflac")}</option>
                        <option value="tidak">{t("falseReflac")}</option>
                    </select>
                )}
            </div>
        </div>
    );
}

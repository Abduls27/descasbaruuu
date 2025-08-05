import Navbar from "@/Components/Navbar";
import Arrow from "@/Icons/Arrow";
import Close from "@/Icons/Close";
import Map from "@/Icons/Map";
import Whatsapp from "@/Icons/Whatsapp";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import FilterShop from "./Components/FilterShop";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ShopIndex({ shops: initialShops, auth, search }) {
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(null);
    const [shops, setShops] = useState(initialShops);

    const [filters, setFilters] = useState({
        minWeight: "",
        maxWeight: "",
        minPrice: "",
        maxPrice: "",
        reflaction: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredShops = shops.filter((shop) => {
        const withinWeight =
            (!filters.minWeight || shop.weight >= filters.minWeight) &&
            (!filters.maxWeight || shop.weight <= filters.maxWeight);

        const withinPrice =
            (!filters.minPrice || shop.price >= filters.minPrice) &&
            (!filters.maxPrice || shop.price <= filters.maxPrice);

        const matchesReflaction =
            filters.reflaction === ""
                ? true
                : filters.reflaction === "ya"
                ? shop.reflaction === "true"
                : shop.reflaction === "false";

        return withinWeight && withinPrice && matchesReflaction;
    });

    return (
        <>
            <Navbar auth={auth} />

            <section className="bg-[url('img/cassava.jpg')] w-full h-screen bg-center lg:bg-top bg-cover flex flex-col justify-center lg:justify-between px-4 md:px-8 2xl:px-16 pt-32 2xl:pt-64 pb-16 -mt-14 lg:-mt-15">
                <div>
                    <h2 className="text-2xl lg:text-4xl xl:text-6xl text-white w-72 lg:w-178">
                        {t("marketHeroTitle")}
                    </h2>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-4 mt-6 lg:mt-0">
                        <Arrow classname="h-8 md:h-10 text-white stroke-[1.5px] rotate-90 transition-all duration-200" />
                        <p className="mt-2 lg:mt-8 mb-6 font-medium text-sm lg:text-base text-zinc-200 w-74 lg:w-138">
                            {t("marketHeroDesc")}
                        </p>
                    </div>
                </div>
                <div
                    id="toko"
                    className="flex lg:justify-center items-center gap-1 group mt-8 lg:mt-0"
                >
                    <Link
                        href="/shop#toko"
                        className="flex items-center gap-4 w-fit px-10 py-3 text-xs md:text-sm rounded-full font-semibold bg-white group-hover:bg-lime-300"
                    >
                        {t("startShop")}
                    </Link>
                    <span className="p-2 bg-white group-hover:bg-lime-300 rounded-full">
                        <Arrow classname="h-4 md:h-6 text-black stroke-[1.5px] group-hover:rotate-90 transition-all duration-200" />
                    </span>
                </div>
            </section>

            <article className="mx-2 md:mx-8 my-12 mb-24 flex flex-col lg:flex-row gap-4">
                <FilterShop
                    search={search}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onSearchResult={setShops} // inilah yang menangani hasil pencarian
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-2">
                    {filteredShops.map((shop) => (
                        <div
                            key={shop.id}
                            className="p-2 md:p-4 lg:bg-white lg:shadow-lg lg:rounded-xl cursor-pointer"
                            onClick={() => setShowModal(shop)}
                        >
                            <img
                                src={`/cassava/${shop.img}`}
                                alt={shop.img}
                                className="h-40 lg:h-52 2xl:h-64 lg:w-52 2xl:w-64 object-center object-cover rounded-lg"
                            />
                            <div className="mt-2">
                                <h2 className="font-semibold text-sm md:text-lg">
                                    {shop.name}
                                </h2>
                                <p className="text-xs md:text-sm lg:text-base text-zinc-400">
                                    {shop.address.length > 20
                                        ? shop.address.slice(0, 20) + "..."
                                        : shop.address}
                                </p>

                                <div className="mt-4">
                                    <p className="text-xs 2xl:text-sm text-zinc-400">
                                        {t("rangePrice")}
                                    </p>
                                    <h1 className="font-bold text-lg lg:text-xl 2xl:text-2xl text-lime-600">
                                        Rp. {shop.price}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* desktop */}
                    <AnimatePresence>
                        {showModal && (
                            <motion.div
                                className="fixed inset-0 bg-black/40 justify-center items-center z-50 hidden lg:flex"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-xl max-w-5xl relative"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-bold text-2xl">
                                            {t("proDetail")}
                                        </h1>
                                        <button
                                            onClick={() => setShowModal(null)}
                                            className="p-2 bg-zinc-100 hover:bg-red-500 rounded-lg group cursor-pointer"
                                        >
                                            <Close className="h-4 stroke-2 stroke-zinc-500 group-hover:stroke-white" />
                                        </button>
                                    </div>

                                    {/* Konten modal desktop */}
                                    <div className="flex justify-between gap-6 my-6">
                                        <img
                                            src={`/cassava/${showModal.img}`}
                                            alt={showModal.img}
                                            className="w-120 h-80 object-cover rounded-lg mb-4"
                                        />
                                        <div>
                                            <div>
                                                <p className="text-xs 2xl:text-sm text-zinc-500">
                                                    {t("farmerName")}
                                                </p>
                                                <h2 className="text-xl font-bold mb-2">
                                                    {showModal.name}
                                                </h2>
                                                <p className="text-sm text-zinc-600 mb-2 lg:w-100">
                                                    {showModal.address}
                                                </p>
                                                <div className="flex items-center gap-8">
                                                    <a
                                                        href={showModal.maps}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Map className="h-5 stroke-1 text-lime-500" />
                                                        <span className="font-semibold text-sm text-lime-500">
                                                            {t("openMaps")}
                                                        </span>
                                                    </a>
                                                    <a
                                                        href={`https://wa.me/${showModal.number}`}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Whatsapp className="h-5 stroke-1 text-lime-500" />
                                                        <span className="font-semibold text-sm text-lime-500">
                                                            {t("openWa")}
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <p className="mb-1 text-xs 2xl:text-sm text-zinc-400">
                                                    {t("rangePrice")}
                                                </p>
                                                <h1 className="font-bold text-lg lg:text-2xl 2xl:text-3xl text-lime-600">
                                                    Rp. {showModal.price}
                                                </h1>
                                            </div>

                                            <div className="mt-6 text-sm lg:text-base">
                                                <h2 className="font-bold text-base text-zinc-800 mb-1">
                                                    {t("productDesc")}
                                                </h2>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("landType")} :
                                                    </span>{" "}
                                                    {showModal.land}
                                                </p>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("reflac")} :
                                                    </span>{" "}
                                                    {showModal.reflaction
                                                        ? t("trueReflac")
                                                        : t("falseReflac")}
                                                </p>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("weight")} :
                                                    </span>{" "}
                                                    {showModal.weight}{" "}
                                                    <span className="text-zinc-500">
                                                        Ton
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* mobile */}
                    <AnimatePresence>
                        {showModal && (
                            <motion.div
                                className="fixed inset-0 bg-black/40 flex lg:hidden justify-end items-end z-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="bg-white p-6 rounded-t-lg shadow-xl w-full"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-bold text-xl">
                                            Detail Produk Singkong
                                        </h1>
                                        <button
                                            onClick={() => setShowModal(null)}
                                            className="p-2 bg-zinc-100 hover:bg-red-500 rounded-full group cursor-pointer"
                                        >
                                            <Close className="h-4 stroke-2 stroke-zinc-800 group-hover:stroke-white" />
                                        </button>
                                    </div>

                                    {/* Konten modal mobile */}
                                    <div className="flex flex-col justify-between gap-6 my-6">
                                        <img
                                            src={`/cassava/${showModal.img}`}
                                            alt={showModal.img}
                                            className="w-120 h-64 object-cover rounded-lg mb-4"
                                        />
                                        <div>
                                            <p className="text-xs text-zinc-500">
                                                {t("farmerName")}
                                            </p>
                                            <h2 className="text-xl font-bold mb-2">
                                                {showModal.name}
                                            </h2>
                                            <p className="text-sm text-zinc-600 mb-2">
                                                {showModal.address}
                                            </p>

                                            <div className="flex items-center gap-8">
                                                <a
                                                    href={showModal.maps}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Map className="h-5 stroke-1 text-lime-500" />
                                                    <span className="font-semibold text-sm text-lime-500">
                                                        {t("openMaps")}
                                                    </span>
                                                </a>
                                                <a
                                                    href={`https://wa.me/${showModal.number}`}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Whatsapp className="h-4 stroke-1 text-lime-500" />
                                                    <span className="font-semibold text-sm text-lime-500">
                                                        {t("openWa")}
                                                    </span>
                                                </a>
                                            </div>

                                            <div className="mt-8">
                                                <p className="mb-1 text-xs 2xl:text-sm text-zinc-400">
                                                    {t("rangePrice")}
                                                </p>
                                                <h1 className="font-bold text-2xl text-lime-600">
                                                    Rp. {showModal.price}
                                                </h1>
                                            </div>

                                            <div className="mt-6 text-sm">
                                                <h2 className="font-bold text-base text-zinc-800 mb-1">
                                                    {t("productDesc")}
                                                </h2>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("landType")}
                                                    </span>{" "}
                                                    : {showModal.land}
                                                </p>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("reflac")}
                                                    </span>{" "}
                                                    :{" "}
                                                    {showModal.reflaction
                                                        ? "Ya"
                                                        : "Tidak"}
                                                </p>
                                                <p>
                                                    <span className="text-zinc-400">
                                                        {t("weight")}
                                                    </span>{" "}
                                                    : {showModal.weight} Ton
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </article>
        </>
    );
}

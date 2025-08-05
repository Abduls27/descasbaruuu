import Sale from "@/Icons/Sale";
import Search from "@/Icons/Search";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SelectRendemen({ rendemens, value, onChange }) {
    const { t } = useTranslation();
    const [query, setQuery] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const wrapperRef = useRef(null);

    const selectedItem = rendemens.find((item) => item.id === parseInt(value));

    const filtered = rendemens.filter((item) =>
        `${item.name} ${item.code} ${item.jenis}`
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    const handleSelect = (item) => {
        onChange(item.id);
        setQuery(item.code);
        setShowOptions(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!value) setQuery("");
    }, [value]);

    useEffect(() => {
        if (value) {
            const selected = rendemens.find(
                (item) => item.id === parseInt(value)
            );
            if (selected) {
                setQuery(selected.code);
            }
        }
    }, [value, rendemens]);

    return (
        <div className="w-full" ref={wrapperRef}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("saleRen")}
            </label>
            <div className="relative">
                <div className="flex items-center gap-2 pr-4 border border-zinc-200 rounded-lg focus-within:outline focus-within:outline-lime-400">
                    <input
                        type="text"
                        className="w-full px-4 py-2 focus:outline-none placeholder:text-sm"
                        placeholder={t("saleRenPl")}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowOptions(true);
                        }}
                        onFocus={() => setShowOptions(true)}
                    />

                    <Search className="h-6 stroke-2 stroke-lime-500" />
                </div>

                {showOptions && (
                    <ul className="absolute z-10 mt-2 p-2 w-full max-h-52 overflow-auto bg-white border border-zinc-200 rounded-xl shadow-md">
                        {filtered.length === 0 ? (
                            <li className="px-4 py-2 text-zinc-500">
                                {t("saleRenNot")}
                            </li>
                        ) : (
                            filtered.map((item) => (
                                <li
                                    key={item.id}
                                    className="px-4 py-2 cursor-pointer hover:bg-lime-100 rounded-lg"
                                    onClick={() => {
                                        handleSelect(item);
                                    }}
                                >
                                    <div className="font-semibold text-sm">
                                        {item.code}
                                    </div>
                                    <div className="mt-1 text-xs text-zinc-600">
                                        SG: {item.sg} | SC: {item.sc}%
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

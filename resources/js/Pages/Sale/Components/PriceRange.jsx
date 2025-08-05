import InputLabel from "@/Components/InputLabel";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PriceRange({ onChange, value,label }) {
    const { t } = useTranslation();
    const hargaOptions = [
        1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
    ];

    const isCustomValue = value !== "" && !hargaOptions.includes(Number(value));

    const handleChange = (e) => {
        const selected = e.target.value;
        if (selected === "lainnya") {
            onChange("");
        } else {
            onChange(selected);
        }
    };

    return (
        <div className="flex flex-col gap-2 mb-4">
            <InputLabel value={label} />
            <select
                id="harga"
                value={hargaOptions.includes(Number(value)) ? value : "lainnya"}
                onChange={handleChange}
                className="w-96 h-10 px-2 border border-zinc-200 rounded-lg focus:outline-lime-500"
            >
                {hargaOptions.map((harga, idx) => (
                    <option key={idx} value={harga}>
                        {harga}
                    </option>
                ))}
                <option value="lainnya">{t('salePrOther')}</option>
            </select>

            {value === "" || isCustomValue ? (
                <input
                    type="number"
                    placeholder={t('saleOtherPl')}
                    className="w-96 h-10 px-2 border border-zinc-200 rounded-lg focus:outline-lime-500"
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                />
            ) : null}
        </div>
    );
}

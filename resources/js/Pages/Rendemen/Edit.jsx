import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import InputLabel from "@/Components/InputLabel";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RendemenPDF from "./RendemenPDF";
import Download from "@/Icons/download";
import Close from "@/Icons/Close";
import Check from "@/Icons/Check";
import { route } from "ziggy-js";
import FormInput from "@/Components/FormInput";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InputError from "@/Components/InputError";

export default function EditRendemen({ response }) {
    const { t } = useTranslation();
    const [name, setName] = useState(response.name || "");
    const [date, setDate] = useState(response.date || "");
    const [jenis, setJenis] = useState(response.jenis || "");
    const [wo, setWO] = useState(response.wo || "");
    const [wu, setWU] = useState(response.wu || "");
    const [sg, setSG] = useState(response.sg || null);
    const [sc, setSC] = useState(response.sc || null);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateInputs = () => {
        const fields = [
            { key: "name", label: t("tabName") },
            { key: "date", label: t("tabDate") },
            { key: "jenis", label: t("casType") },
            { key: "wo", label: t("wo") },
            { key: "wu", label: t("wu") },
        ];

        const newErrors = {};
        fields.forEach(({ key, label }) => {
            const value = eval(key);
            if (!value || value.trim?.() === "") {
                newErrors[key] = `${label} ${t("formRequired")}`;
            }
        });

        const woVal = parseFloat(wo);
        const wuVal = parseFloat(wu);
        if (!isNaN(woVal) && !isNaN(wuVal) && woVal <= wuVal) {
            newErrors.wu = t("formWUInvalid");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isFormChanged = () => {
        return (
            name !== response.name ||
            date !== response.date ||
            jenis !== response.jenis ||
            wo !== response.wo ||
            wu !== response.wu
        );
    };

    const calculate = () => {
        if (!validateInputs()) return;
        if (!isFormChanged()) {
            alert(t("formNoChanges"));
            return;
        }

        const woVal = parseFloat(wo);
        const wuVal = parseFloat(wu);

        if (isNaN(woVal) || isNaN(wuVal) || woVal <= wuVal) {
            alert(
                "Enter valid Wo and Wu values, and make sure that Wo is greater than Wu"
            );
            return;
        }

        const sgResult = woVal / (woVal - wuVal);
        const scResult = (sgResult - 1.00906) / 0.004845;

        setSG(sgResult.toFixed(2));
        setSC(scResult.toFixed(2));
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // mulai loading

        const formData = new FormData();
        formData.append("name", name);
        formData.append("date", date);
        formData.append("jenis", jenis);
        formData.append("wo", wo);
        formData.append("wu", wu);
        formData.append("sg", sg);
        formData.append("sc", sc);

        try {
            await axios.post(route("rendemen.update", response.id), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                params: {
                    _method: "PUT",
                },
            });

            setLoading(false);
            setShowModal(false);
            setShowModal2(true);
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Gagal update data.");
            setLoading(false);
        }
    };

    return (
        <>
            <DashboardNavbar />
            <section className="flex">
                <DashboardSidebar />
                <div className="flex flex-col justify-center items-center grow m-4">
                    <div className="text-center md:w-108 my-8 2xl:my-12 md:mb-8">
                        <h1 className="font-bold text-xl 2xl:text-2xl">
                            {t("renEditTitle")}
                        </h1>
                        <p className="mt-2 text-zinc-500 text-sm 2xl:text-base">
                            {t("renEditDesc")}
                        </p>
                    </div>
                    <div>
                        <div>
                            <FormInput
                                label={t("tabName")}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <InputError
                                message={errors.name}
                                className="mb-4 -mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="date" value="Tanggal" />
                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-96 h-10 mt-2 px-2 border border-zinc-200 focus:outline-lime-500 rounded-lg"
                            />
                            <InputError
                                message={errors.date}
                                className="mb-4 mt-1"
                            />
                        </div>

                        <div>
                            <FormInput
                                label={t("casType")}
                                name="jenis"
                                type="text"
                                value={jenis}
                                onChange={(e) => setJenis(e.target.value)}
                            />
                            <InputError
                                message={errors.jenis}
                                className="mb-4 -mt-2"
                            />
                        </div>

                        <div>
                            <FormInput
                                label={t("wo")}
                                name="wo"
                                type="number"
                                value={wo}
                                onChange={(e) => setWO(e.target.value)}
                            />
                            <InputError
                                message={errors.wo}
                                className="mb-4 -mt-2"
                            />
                        </div>

                        <div>
                            <FormInput
                                label={t("wu")}
                                name="wu"
                                type="number"
                                value={wu}
                                onChange={(e) => setWU(e.target.value)}
                            />
                            <InputError
                                message={errors.wu}
                                className="mb-4 -mt-2"
                            />
                        </div>
                    </div>

                    <button
                        onClick={calculate}
                        className="w-96 mt-6 bg-lime-500 hover:bg-lime-600 font-semibold hover:text-white px-6 py-2 rounded-lg cursor-pointer"
                    >
                        {t("calcBtn")}
                    </button>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-128">
                            <div className="flex justify-center mb-6">
                                <img
                                    src="/img/logo.png"
                                    alt="logo"
                                    className="h-20 2xl:h-24"
                                />
                            </div>
                            <h1 className="font-bold text-lg 2xl:text-xl">
                                {t("renMoTitle")}
                            </h1>
                            <h2 className="text-zinc-500 text-sm 2xl:text-base">
                                {t("renMoDesc")}
                            </h2>

                            <div className="my-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-zinc-500">
                                        {t("tabName")}
                                    </label>
                                    <p className="px-4 py-2 text-base font-semibold">
                                        {name}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-zinc-500">
                                        {t("tabDate")}
                                    </label>
                                    <p className="px-4 py-2 text-base font-semibold">
                                        {date}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-zinc-500">
                                        {t("casType")}
                                    </label>
                                    <p className="px-4 py-2 text-base font-semibold">
                                        {jenis}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-zinc-500">
                                        {t("renSg")}
                                    </label>
                                    <p className="px-4 py-2 text-base font-semibold">
                                        {sg}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="text-sm text-zinc-500">
                                        {t("renSc")}
                                    </label>
                                    <p className="mt-2 px-4 py-2 font-semibold">
                                        {sc}%
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 mt-6 font-semibold no-print">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="grow py-2 text-sm 2xl:text-base text-zinc-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-lg cursor-pointer"
                                >
                                    {t("cancel")}
                                </button>
                                <button
                                    disabled={loading}
                                    onClick={handleSubmit}
                                    className="grow py-2 text-sm 2xl:text-base hover:text-white  bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer"
                                >
                                    {loading ? (
                                        <div className="flex justify-center items-center">
                                            <div className="loader"></div>
                                        </div>
                                    ) : (
                                        t("calcBtn")
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showModal2 && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white p-4 rounded-lg shadow-lg lg:w-128">
                            <div className="flex flex-col justify-center items-center my-8">
                                <Check className="h-24 fill-green-500" />
                                <h2 className="text-lg font-bold text-center my-4">
                                    {t("renEditSuc")}
                                </h2>
                            </div>
                            <PDFDownloadLink
                                document={
                                    <RendemenPDF
                                        name={name}
                                        date={date}
                                        jenis={jenis}
                                        sg={sg}
                                        sc={sc}
                                    />
                                }
                                fileName="hasil-rendemen.pdf"
                            >
                                {({ loading }) =>
                                    loading ? (
                                        <div className="loader"></div>
                                    ) : (
                                        <button className="w-full flex justify-center items-center gap-4 px-4 py-2 bg-blue-100 hover:bg-blue-600 hover:text-white rounded-lg group cursor-pointer">
                                            {t("downModal")}
                                            <Download className="h-6 fill-zinc-600 group-hover:fill-white" />
                                        </button>
                                    )
                                }
                            </PDFDownloadLink>

                            <Link
                                href="/rendemen"
                                className="flex justify-center grow mt-4 px-4 py-2 bg-lime-500 hover:bg-lime-600 hover:text-white font-semibold rounded-lg"
                            >
                                {t("con")}
                            </Link>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

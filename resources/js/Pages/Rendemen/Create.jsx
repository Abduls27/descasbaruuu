import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import InputLabel from "@/Components/InputLabel";
import { Link } from "@inertiajs/react";
import { useRef, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RendemenPDF from "./RendemenPDF";
import Download from "@/Icons/download";
import Close from "@/Icons/Close";
import Check from "@/Icons/Check";
import { route } from "ziggy-js";
import FormInput from "@/Components/FormInput";
import { useTranslation } from "react-i18next";
import InputError from "@/Components/InputError";

export default function RendemenCreate() {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [jenis, setJenis] = useState("");
    const [wo, setWO] = useState("");
    const [wu, setWU] = useState("");
    const [sg, setSG] = useState(null);
    const [sc, setSC] = useState(null);
    const [showModal, setShowModal] = useState(null);
    const [showModal2, setShowModal2] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateFields = () => {
        const newErrors = {};
        if (!name) newErrors.name = `${t("tabName")} ${t("formRequired")}`;
        if (!date) newErrors.date = `${t("tabDate")} ${t("formRequired")}`;
        if (!jenis) newErrors.jenis = `${t("casType")} ${t("formRequired")}`;
        if (!wo) newErrors.wo = `${t("wo")} ${t("formRequired")}`;
        if (!wu) newErrors.wu = `${t("wu")} ${t("formRequired")}`;
        else if (parseFloat(wo) <= parseFloat(wu))
            newErrors.wu = t("formWUInvalid");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculate = () => {
        if (!validateFields()) return;

        const woVal = parseFloat(wo);
        const wuVal = parseFloat(wu);

        const sgResult = woVal / (woVal - wuVal);
        const scResult = (sgResult - 1.00906) / 0.004845;

        setSG(sgResult.toFixed(2));
        setSC(scResult.toFixed(2));
        setShowModal(true);
    };

    const handleSubmit = async () => {
        if (loading || submitted) {
            setLoading(true);
        }

        try {
            const response = await axios.post(route("rendemen.store"), {
                name,
                date,
                jenis,
                wo,
                wu,
                sg,
                sc,
            });

            setSubmitted(true);
            setShowModal(false);
            setShowModal2(true);
        } catch (error) {
            console.error("Gagal simpan:", error);
            alert("Terjadi kesalahan saat menyimpan data.");
        } finally {
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
                            {t("calcRenTitle")}
                        </h1>
                        <p className="mt-2 text-zinc-500 text-sm 2xl:text-base">
                            {t("calcRenDesc")}
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
                                className="mb-4 lg:mb-0 -mt-2 lg:mt-1"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="date" value={t("tabDate")} />
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
                                className="mb-4 lg:mb-0 mt-2"
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
                                className="mb-4 lg:mb-0 -mt-2 lg:mt-1"
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
                                className="mb-4 lg:mb-0 -mt-2 lg:mt-1"
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
                                className="mb-4 lg:mb-0 -mt-2 lg:mt-1"
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
                        <div className="bg-white p-8 rounded-lg shadow-lg mx-2 lg:w-128">
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
                                    onClick={() => handleSubmit()}
                                    className="grow py-2 text-sm 2xl:text-base hover:text-white  bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer"
                                >
                                    {t("save")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showModal2 && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white p-4 rounded-lg shadow-lg mx-2 lg:w-128">
                            <div className="flex flex-col justify-center items-center my-8">
                                <Check className="h-24 fill-green-500" />
                                <h2 className="text-lg font-bold text-center my-4">
                                    {t("sucModal")}
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
                                        title={t("renMoTitle")}
                                        subtitle={t("renMoDesc")}
                                        labelName={t("tabName")}
                                        labelDate={t("tabDate")}
                                        labelJenis={t("casType")}
                                        labelSG={t("renSg")}
                                        labelSC={t("renSc")}
                                    />
                                }
                                fileName="hasil-rendemen.pdf"
                            >
                                {({ loading }) =>
                                    loading ? (
                                        <div className="flex justify-center items-center">
                                            <div className="loader"></div>
                                        </div>
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

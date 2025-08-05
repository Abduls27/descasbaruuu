import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import InputLabel from "@/Components/InputLabel";
import FormInput from "@/Components/FormInput";
import { useState } from "react";
import axios from "axios";
import { route } from "ziggy-js";
import { useTranslation } from "react-i18next";
import InputError from "@/Components/InputError";

export default function EditFarmer({ response }) {
    const { t } = useTranslation();
    const [name, setName] = useState(response.name || "");
    const [email, setEmail] = useState(response.email || "");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateInputs = () => {
        const newErrors = {};

        if (!name || name.trim() === "") {
            newErrors.name = `${t("farmName")} ${t("formRequired")}`;
        }

        if (!email || email.trim() === "") {
            newErrors.email = `${t("email")} ${t("formRequired")}`;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email =
                t("formEmailInvalid") || "Format email tidak valid";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateInputs()) return;

        setLoading(true);
        setErrorMessage("");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);

        try {
            const res = await axios.post(
                route("farmer.update", response.id),
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    params: {
                        _method: "PUT",
                    },
                }
            );
            setShowConfirm(false);
            window.location.href = res.data.redirect || route("farmer.index");
        } catch (error) {
            setErrorMessage("Email has already taken");
            setLoading(false);
            setShowConfirm(false);
        }
    };

    return (
        <>
            <DashboardNavbar />
            <section className="flex">
                <DashboardSidebar />

                <div className="grow m-4 flex flex-col justify-center items-center">
                    <div className="text-center md:w-108 my-12 2xl:my-0 md:mb-8">
                        <h1 className="font-bold text-xl 2xl:text-2xl">
                            Edit Data Petani
                        </h1>
                        <p className="mt-2 text-zinc-500 text-sm 2xl:text-base">
                            Perbarui data petani dengan lengkap dan benar.
                        </p>
                    </div>

                    <form className="">
                        <FormInput
                            label={t("farmName")}
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <InputError
                            message={errors.name}
                            className="mb-4 -mt-2"
                        />

                        <FormInput
                            label={t("email")}
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <InputError
                            message={errors.email}
                            className="mb-4 -mt-2"
                        />

                        {errorMessage && (
                            <p className="text-red-600 text-sm font-semibold">
                                {errorMessage}
                            </p>
                        )}

                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => {
                                if (validateInputs()) {
                                    setShowConfirm(true);
                                }
                            }}
                            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </section>

            {/* Modal konfirmasi sebelum update */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg lg:w-128">
                        <div className="flex justify-center mb-6">
                            <img
                                src="/img/logo.png"
                                alt="logo"
                                className="h-20 2xl:h-24"
                            />
                        </div>
                        <div className="my-12 flex flex-col items-center">
                            <h1 className="font-bold text-lg 2xl:text-xl">
                                {t("farmEditTitle")}
                            </h1>
                            <h2 className="w-82 mt-2 text-center text-zinc-500 text-sm 2xl:text-base">
                                {t("farmEditMo")}
                            </h2>
                        </div>

                        <div className="flex justify-between gap-2 mt-6 font-semibold">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="grow py-2 text-sm 2xl:text-base text-zinc-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-lg cursor-pointer"
                                disabled={loading}
                            >
                                {t("cancel")}
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="grow py-2 text-sm 2xl:text-base text-white bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer"
                            >
                                {t("farmEditBtn")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

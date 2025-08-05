import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import FormInput from "@/Components/FormInput";
import PriceRange from "./Components/PriceRange";
import { useState } from "react";
import axios from "axios";
import SelectRendemen from "./Components/SelectRendemen";
import InputLabel from "@/Components/InputLabel";
import { useTranslation } from "react-i18next";
import InputError from "@/Components/InputError";

export default function CreateSale({ rendemens }) {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        name: "",
        nik: "",
        address: "",
        maps: "",
        email: "",
        land: "",
        number: "",
        price: "",
        weight: "",
        reflaction: "true",
        rendemen_id: "",
    });

    const [showModal, setShowModal] = useState(null);
    const [img, setImg] = useState(null);

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    };

    const handlePreSubmit = () => {
        const requiredFields = [
            { key: "name", label: t("saleName") },
            { key: "nik", label: t("nik") },
            { key: "address", label: t("saleAdd") },
            { key: "maps", label: t("saleGmap") },
            { key: "email", label: t("email") },
            { key: "img", label: t("saleImg") },
            { key: "number", label: t("saleWa") },
            { key: "land", label: t("landType") },
            { key: "price", label: t("salePrice") },
            { key: "weight", label: t("saleWeight") },
            { key: "rendemen_id", label: t("rendemen") },
        ];

        const newErrors = {};

        requiredFields.forEach(({ key, label }) => {
            if (key === "img") {
                if (!img) newErrors.img = `${label} ${t("formRequired")}`;
            } else if (!form[key]) {
                newErrors[key] = `${label} ${t("formRequired")}`;
            }
        });

        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = t("formInvalidEmail");
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setShowModal(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading || submitted) return;
        setLoading(true);

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (img) {
            formData.append("img", img);
        }

        try {
            const response = await axios.post(route("sale.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.redirect) {
                setSubmitted(true); 
                setShowModal(false);
                window.location.href = response.data.redirect;
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Terjadi kesalahan saat mengirim data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <DashboardNavbar />
            <section className="flex justify-between mb-12">
                <DashboardSidebar />
                <div className="flex flex-col justify-center items-center grow m-4">
                    <div className="text-center md:w-108 my-8 2xl:my-12 md:mb-8">
                        <h1 className="font-bold text-xl 2xl:text-2xl">
                            {t("saleTitle")}
                        </h1>
                        <p className="mt-2 text-zinc-500 text-sm 2xl:text-base">
                            {t("saleDesc")}
                        </p>
                    </div>
                    <div className="my-12">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <FormInput
                                    label={t("saleName")}
                                    name="name"
                                    value={form.name}
                                    onChange={(e) =>
                                        handleChange("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <FormInput
                                    label={t("nik")}
                                    name="nik"
                                    value={form.nik}
                                    onChange={(e) =>
                                        handleChange("nik", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.nik}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <FormInput
                                    label={t("saleAdd")}
                                    name="address"
                                    value={form.address}
                                    onChange={(e) =>
                                        handleChange("address", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.address}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <FormInput
                                    label={t("saleGmap")}
                                    name="maps"
                                    value={form.maps}
                                    onChange={(e) =>
                                        handleChange("maps", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.maps}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <FormInput
                                    label={t("email")}
                                    name="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        handleChange("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <FormInput
                                    label={t("saleWa")}
                                    name="number"
                                    value={form.number}
                                    onChange={(e) =>
                                        handleChange("number", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.number}
                                    className="mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <InputLabel value={t("saleImg")} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100"
                                />
                                <InputError
                                    message={errors.img}
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <FormInput
                                    label={t("landType")}
                                    name="text"
                                    value={form.land}
                                    onChange={(e) =>
                                        handleChange("land", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.land}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <PriceRange
                                    label={t("salePrice")}
                                    value={form.price}
                                    onChange={(val) =>
                                        handleChange("price", val)
                                    }
                                />
                                <InputError
                                    message={errors.price}
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <FormInput
                                    label={t("saleWeight")}
                                    name="number"
                                    value={form.weight}
                                    onChange={(e) =>
                                        handleChange("weight", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.weight}
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <InputLabel value={t("saleRef")} />
                                <select
                                    name="reflaction"
                                    value={form.reflaction}
                                    onChange={(e) =>
                                        handleChange(
                                            "reflaction",
                                            e.target.value
                                        )
                                    }
                                    className="w-full mt-2 px-4 py-2 border border-zinc-200 rounded-lg focus:outline-lime-500"
                                >
                                    <option value="true">
                                        {t("trueReflac")}
                                    </option>
                                    <option value="false">
                                        {t("falseReflac")}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <SelectRendemen
                                    rendemens={rendemens}
                                    value={form.rendemen_id}
                                    onChange={(val) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            rendemen_id: val,
                                        }))
                                    }
                                />
                                <InputError
                                    message={errors.rendemen_id}
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handlePreSubmit}
                            className="w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer"
                        >
                            {t("saleTitle")}
                        </button>
                    </div>

                    {showModal && (
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
                                        {t("saleTitle")}
                                    </h1>
                                    <h2 className="w-82 mt-2 text-center text-zinc-500 text-sm 2xl:text-base">
                                        {t("saleMoDesc")}
                                    </h2>
                                </div>

                                <div className="flex justify-between gap-2 mt-6 font-semibold no-print">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="grow py-2 text-sm 2xl:text-base text-zinc-700 hover:text-white bg-red-100 hover:bg-red-600 rounded-lg cursor-pointer"
                                    >
                                        {t("cancel")}
                                    </button>
                                    <button
                                        onClick={(e) => handleSubmit(e)}
                                        disabled={loading}
                                        className="grow flex justify-center items-center py-2 text-sm 2xl:text-base text-white  bg-lime-500 hover:bg-lime-600 rounded-lg cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="loader "></div>
                                            </>
                                        ) : (
                                            t("saleTitle")
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Register() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <section className="min-h-screen flex justify-between bg-stone-50">
            <Head title="Register" />
            <div className="mx-4 md:mx-8 flex flex-col items-center justify-between w-1/2 pb-4">
                {/* logo */}
                <Link href="/" className="py-12">
                    <img
                        src="img/logo.png"
                        alt="logo"
                        className="h-20 md:h-24 2xl:h-32"
                    />
                </Link>

                {/* login form */}
                <div className="mb-8">
                    <div className="flex flex-col justify-center items-center mb-12">
                        <h2 className="font-bold text-3xl">{t("regTitle")}</h2>
                        <p className="text-zinc-500">{t("regDesc")}</p>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                className="w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                className="w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                                className="w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                                className="w-96 h-10 mt-2 px-2 border border-zinc-300 focus:outline-lime-500 rounded-lg"
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col items-center mt-6">
                            <button
                                type="submit"
                                className="w-full py-3 bg-lime-600 hover:bg-lime-700 rounded-lg font-semibold text-white cursor-pointer"
                            >
                                {t("regBtn")}
                            </button>

                            <p className="mt-4 text-sm text-zinc-500">
                                {t('regAcc')} {""}
                                <Link
                                    href="/login"
                                    className="text-lime-500 hover:text-lime-600"
                                >
                                    {t("regLog")}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <footer className="w-full flex justify-between text-sm text-zinc-500">
                    <h3>Copyright © 2025 Descas</h3>
                    <h4>WADJAH Creative & Innovate</h4>
                </footer>
            </div>

            <div className="bg-[url('/img/login.jpg')] m-4 bg-cover bg-center w-1/2 hidden md:block rounded-xl"></div>
        </section>
    );
}

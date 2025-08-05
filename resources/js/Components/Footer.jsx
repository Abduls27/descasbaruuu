import Arrow from "@/Icons/Arrow";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="mx-2 2xl:mx-4 my-2 2xl:my-4 p-8 lg:p-16 pb-4 bg-zinc-800 rounded-xl text-white">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:w-120 2xl:w-1/3">
                    <h1 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
                        {t("footerTitle")}
                        <br />{" "}
                        <span className="font-medium text-lg md:text-xl 2xl:text-2xl">
                            Science 2022
                        </span>
                    </h1>
                    <h2 className="mt-6 2xl:text-lg text-zinc-400">
                        {t("footerAdd")}
                    </h2>

                    <a href="mailto:inovasiwadjah@gmail.com" className="w-fit flex items-center gap-3 text-sm lg:text-base mt-6 mb-12 lg:mb-0 lg:mt-12 pl-4 pr-2 py-2 bg-lime-400 text-zinc-800 font-semibold rounded-full group">
                        {t("contactUs")} {" "}
                        <div className="p-1 bg-zinc-800 rounded-full">
                            <Arrow classname="h-4 lg:h-5 stroke-2 text-white rotate-45 group-hover:rotate-90 transition-all duration-300" />
                        </div>
                    </a>
                </div>

                {/* section 2 */}
                <div className="grid grid-cols-2 lg:flex gap-10 md:gap-16 2xl:gap-24">
                    {/* kontak */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-lg mb-4">{t('contactNavTitle')}</h2>

                        <a href="mailto:inovasiwadjah@gmail.com" className="text-zinc-400 hover:text-white">
                            {t('email')}
                        </a>
                        <a target="_blank" href="https://wa.me/+6288295443091" className="text-zinc-400 hover:text-white">
                            {t('wa')}
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/wadjah-inovasi-indonesia" className="text-zinc-400 hover:text-white">
                            {t('Linkedin')}
                        </a>
                    </div>

                    {/* navigasi */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-lg mb-4">{t('navigationNavTitle')}</h2>

                        <Link href="/" className="text-zinc-400 hover:text-white">
                            {t('homeNav')}
                        </Link>
                        <Link href="/shop" className="text-zinc-400 hover:text-white">
                           {t('marketNav')}
                        </Link>
                        <Link href="/dashboard" className="text-zinc-400 hover:text-white">
                            {t('dashNav')}
                        </Link>
                    </div>

                    {/* fitur */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-lg mb-4">{t('featureNavTitle')}</h2>

                        <Link href="/rendemen/create" className="text-zinc-400 hover:text-white">
                            {t('calcNav')}
                        </Link>
                        <Link href="/rendemen" className="text-zinc-400 hover:text-white">
                            {t('historyNav')}
                        </Link>
                        <Link href="#fitur" className="text-zinc-400 hover:text-white">
                            {t('langNav')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* moto */}

            <div className="flex justify-between mt-16 text-xs md:text-sm text-zinc-400">
                <p>Copyright © 2025 Descas</p>
                <p>WADJAH Creative & Innovate</p>
            </div>
        </footer>
    );
}

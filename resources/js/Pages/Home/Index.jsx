import { Head, Link } from "@inertiajs/react";
import Arrow from "@/Icons/Arrow";
import Feature from "./Feature";
import Footer from "../../Components/Footer";
import Spark from "@/Icons/Spark";
import ImgCard from "./Components/ImageCard";
import Navbar from "@/Components/Navbar";
import { useTranslation } from "react-i18next";

export default function Home({ auth }) {
    const { t } = useTranslation();

    return (
        <>
            <Head title="Descas" />
            <Navbar auth={auth} />
            <div className="bg-[url('img/bglanding.png')] w-full h-screen bg-cover flex flex-col justify-end -mt-17 lg:-mt-15">
                {/* content */}
                <div className="px-4 md:px-8 lg:px-16 py-12">
                    <div className="bg-white/15 backdrop-blur-xs px-4 py-2 rounded-full w-fit text-white font-light text-xs md:text-sm 2xl:text-base">
                        {t("glass")}
                    </div>

                    <h2 className="mt-6 text-2xl lg:text-4xl xl:text-6xl text-white w-80 lg:w-158">
                        {t("titleHome")}
                    </h2>
                    <p className="mt-2 lg:mt-8 mb-6 text-zinc-200 min-w-80 lg:w-138">
                        {t("descriptionHome")}
                    </p>

                    <Link
                        href="/rendemen"
                        className="flex items-center gap-4 w-fit pl-4 pr-2 py-2 text-sm md:text-base rounded-full font-medium bg-lime-400 group"
                    >
                        {t("start")}
                        <span className="p-1 bg-black rounded-full">
                            <Arrow classname="h-4 md:h-5 text-white stroke-2 group-hover:rotate-45 transition-all duration-200" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* section 2 */}
            <div className="mx-4 md:mx-8 lg:mx-16 my-12 mb-24">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="h-fit flex items-center gap-3 lg:w-280 2xl:w-350 pt-4 mb-6 lg:mb-0">
                        <Spark className="h-4 stroke-zinc-400" />
                        <h4 className="font-medium text-sm 2xl:text-base text-zinc-700">
                            {t("who")}
                        </h4>
                    </div>
                    <div>
                        <h2 className="text-2xl lg:text-4xl leading-8 lg:leading-12 font-medium">
                            {t("whoTitle")}
                        </h2>
                        <p className="mt-4 mb-8 lg:pr-32 text-zinc-600">
                            {t("whoDescription")}
                        </p>

                        <Link
                            href="/about"
                            className="px-4 py-2 font-semibold text-sm text-zinc-800 border border-zinc-400 rounded-full"
                        >
                            {t("learnMore")}
                        </Link>

                        {/* section */}
                        <div className="flex flex-col 2xl:flex-row gap-2 mt-16">
                            <div className="flex flex-col lg:flex-row gap-2 2xl:grow">
                                <img
                                    src="img/singkong1.jpeg"
                                    alt="petani1"
                                    className="h-80 w-full bg-top object-cover rounded-xl"
                                />
                                <img
                                    src="img/singkong2.jpeg"
                                    alt="petani1"
                                    className="h-80 w-full bg-top object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <Feature />

            {/* Moto */}
            <div className="mx-4 2xl:mx-8">
                <div className="flex flex-col justify-center items-center my-12">
                    <div className="flex gap-3">
                        <Spark className="h-5 text-lime-400" />
                        <p className="mb-6 lg:mb-12 text-lime-400">
                            {t("partner")}
                        </p>
                    </div>
                    <h1 className="lg:w-240 lg:my-8 font-medium text-2xl md:text-4xl lg:text-6xl text-center bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text">
                        {t("partnerTitle")}
                    </h1>
                </div>

                <div className="relative overflow-x-auto">
                    <div className="w-max flex lg:hidden justify-center items-center gap-4 mb-12 mx-4 lg:mx-24 2xl:mx-32">
                        <ImgCard src="img/petani1.jpg" />
                        <ImgCard src="img/petani2.jpg" />
                        <ImgCard src="img/petani3.jpg" />
                        <ImgCard src="img/petani4.jpg" />
                    </div>
                    <div className="hidden lg:flex justify-center items-center gap-4 mb-12 mx-4 lg:mx-24 2xl:mx-32">
                        <ImgCard src="img/petani1.jpg" />
                        <ImgCard src="img/petani2.jpg" />
                        <ImgCard src="img/petani3.jpg" />
                        <ImgCard src="img/petani4.jpg" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

import Calc from "@/Icons/Calc";
import History from "@/Icons/History";
import Language from "@/Icons/Language";
import Marketplace from "@/Icons/Marketplace";
import Card from "./Components/Card";
import Spark from "@/Icons/Spark";
import { useTranslation } from "react-i18next";

export default function Feature() {
    const { t } = useTranslation();
    return (
        <>
            <section id="fitur" className="mx-2 2xl:mx-4 p-8 md:p-16 bg-zinc-800 rounded-xl">
                <div className="flex flex-col lg:flex-row justify-between text-white">
                    <div className="h-fit flex items-center gap-3 lg:w-200 2xl:w-300 pt-4 mb-6 lg:mb-0">
                        <Spark className="h-4 stroke-lime-400" />
                        <h4 className="font-medium text-sm 2xl:text-base text-lime-500">
                            {t('feature')}
                        </h4>
                    </div>
                    <div className="2xl:pr-32">
                        {/* <h2 className="text-2xl lg:text-4xl">
                            {t('featureTitle')}
                        </h2> */}

                        {/* content */}
                        {/* mt-16 */}
                        <div className="flex flex-col gap-12 md:gap-16 2xl:gap-32 mt-8">
                            <div className="flex flex-col md:flex-row gap-12 lg:gap-0 justify-between grow items-center">
                                {/* hitung rendemen */}
                                <Card
                                    title={t('calcTitle')}
                                    text={t('calcDesc')}
                                >
                                    <Calc className="h-10 text-lime-300" />
                                </Card>

                                {/* toko online */}
                                <Card
                                    title={t('marketTitle')}
                                    text={t('marketDesc')}
                                >
                                    <Marketplace className="h-10 text-lime-300" />
                                </Card>
                            </div>

                            {/* section 2 */}
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between grow items-center">
                                {/* multi bahasa */}
                                <Card
                                    title={t('langTitle')}
                                    text={t('langDesc')}
                                >
                                    <Language className="h-10 stroke-32 text-lime-300" />
                                </Card>

                                {/* toko online */}
                                <Card
                                    title={t('historyTitle')}
                                    text={t('historyDesc')}
                                >
                                    <History className="h-10 text-lime-300" />
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

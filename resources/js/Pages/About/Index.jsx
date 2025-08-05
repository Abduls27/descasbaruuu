import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import Footer from "../../Components/Footer";
import Whatsapp from "@/Icons/Whatsapp";
import Location from "@/Icons/Map";
import FindUsCard from "./Components/FindUsCard";
import Spark from "@/Icons/Spark";
import Rocket from "@/Icons/Rocket";
import Team from "@/Icons/Team";
import { useTranslation } from "react-i18next";

export default function About({ auth }) {
    const { t } = useTranslation();
    
    return (
        <>
            <Navbar auth={auth} />
            <section className="min-h-screen flex flex-col items-center justify-center px-4  -mt-14 lg:-mt-16 pt-24 lg:pt-42 pb-12 bg-zinc-800 text-white">
                <h1 className="font-semibold text-4xl 2xl:text-5xl">
                    {t('aboutTitle')}
                </h1>
                <p className="lg:w-180 mt-4 text-center text-sm 2xl:text-base text-zinc-400">
                    {t('aboutDesc')}
                </p>

                <img
                    src="/img/bgabout.jpg"
                    alt="bg"
                    className="h-96 2xl:min-h-140 w-96 lg:w-3/4 object-cover mt-16 rounded-xl"
                />
            </section>

            {/* mengenal section */}
            <div className="flex flex-col justify-center items-center my-12 lg:my-24 mx-4">
                <h1 className="font-semibold text-2xl lg:text-4xl 2xl:text-5xl">
                    {t('knowTitle')}
                </h1>
                <p className="lg:w-180 mt-4 text-center text-sm 2xl:text-base text-zinc-500">
                   {t('knowDesc')}
                </p>

                {/* know*/}
                <div className="mt-12 lg:mx-8 flex flex-col lg:flex-row justify-center items-center gap-2">
                    
                    <img
                        src="img/know.jpg"
                        alt="know"
                        className="h-72 lg:h-112 lg:w-180 2xl:w-240 2xl:h-184 object-cover rounded-2xl"
                    />
                    <div className="flex flex-col gap-2">
                        <img
                            src="img/know2.jpg"
                            alt=""
                            className="h-78 lg:h-54 2xl:h-90 object-cover rounded-2xl"
                        />
                        <img
                            src="img/know3.jpg"
                            alt=""
                            className="h-78 lg:h-54 2xl:h-90 object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* story */}
            <div className="my-12 lg:my-24 mx-4 md:mx-16 2xl:mx-20 flex flex-col md:flex-row justify-between">
                <div className="md:w-480 2xl:w-600 h-fit flex items-center gap-4 mt-10">
                    <Rocket classname="h-10 stroke-[1.5px] stroke-lime-500" />
                    <h1 className="font-semibold text-2xl 2xl:text-4xl text-lime-500">
                       {t('storyTitle')}
                    </h1>
                </div>
                <div>
                    <p className="mt-8 text-sm lg:text-lg 2xl:text-xl font-medium text-zinc-800">
                        {t('storyOne')}
                    </p>
                    <p className="my-8 text-sm lg:text-lg 2xl:text-xl  text-zinc-500">
                        {t('storyTwo')}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <img
                            src="img/story.jpg"
                            alt="story"
                            className="h-72 2xl:h-96 w-94 2xl:w-130 object-cover rounded-xl"
                        />
                        <img
                            src="img/story1.jpg"
                            alt="story"
                            className="h-72 2xl:h-96 w-94 2xl:w-130 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* my-40 mx-4 md:mx-16 2xl:mx-32 flex flex-col justify-center items-center */}
            {/* founder */}
            <div className="flex flex-col md:flex-row justify-between mx-2 2xl:mx-4 my-8 p-6 lg:p-16 bg-zinc-800 text-white rounded-xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 h-fit lg:w-380 mt-4 lg:mt-6">
                    <Spark className="h-6 lg:h-8 stroke-lime-400" />
                    <h1 className="lg:w-80 2xl:w-120 font-semibold text-xl lg:text-2xl 2xl:text-4xl text-lime-400">
                        {t('achiveTitle')}
                    </h1>
                </div>
                <div>
                    <p className="mt-4 text-sm 2xl:text-base text-zinc-400">
                        {t('achiveDes')}
                    </p>

                    <img
                        src="img/achivement.jpg"
                        alt="achivement"
                        className="h-120 2xl:h-160 w-280 object-cover object-center mt-8 rounded-xl"
                    />
                </div>
            </div>

            {/* team */}
            <div className="flex flex-col justify-center items-center 2xl:mx-4 my-8 mx-4 ">
                <div className="flex items-center gap-2">
                    <Team className="h-5 stroke-zinc-500" />
                    <p className="font-medium text-zinc-500">{t('team')}</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <h1 className="font-semibold text-2xl lg:text-4xl text-zinc-800">
                        {t('teamTitle')}
                    </h1>
                </div>
                <div>
                    <p className="lg:w-210 mt-4 text-center text-sm 2xl:text-base text-zinc-400">
                        {t('teamDesc')}
                    </p>
                </div>
                <div className="flex justify-center items-center p-4 mt-12 bg-zinc-100 hover:bg-lime-100 transition-all duration-800 rounded-3xl">
                    <div className="p-2 bg-white rounded-3xl">
                        <img
                            src="img/founder.jpg"
                            alt="founder"
                            className="h-120 object-cover rounded-2xl"
                        />
                        <div className="my-4 text-center">
                            <h1 className="font-bold lg:text-lg">
                                Wahyu Ilham Maula
                            </h1>
                            <h2 className="text-sm text-zinc-400 font-semibold">
                                Founder Descas
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

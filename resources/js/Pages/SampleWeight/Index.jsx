import DashboardNavbar from "@/Components/DashboardNavbar";
import DashboardSidebar from "@/Components/DashboardSidebar";
import Sample from "@/Icons/Sample";
import SampleWeightContent from "./Component/SampleWeightContent";
import { useTranslation } from "react-i18next";

export default function SampleWeightIndex() {
    const { t } = useTranslation();

    return (
        <>
            <DashboardNavbar />
            <div className="flex gap-4">
                <DashboardSidebar />
                <div className="lg:grow py-4 m-4 lg:m-0 xl:py-8 2xl:py-12">
                    <div className="min-w-84 lg:w-190">
                        <h1 className="font-extrabold text-xl md:text-3xl xl:text-4xl text-zinc-800">
                            {t('sampTitle')}
                        </h1>
                        <p className="mt-4 font-medium text-sm md:text-base text-zinc-500">
                            {t('sampDesc')}
                        </p>
                        <img
                            src="img/bgsample.jpg"
                            alt="bgsample"
                            className="my-4 rounded-xl"
                        />
                    </div>
                    <SampleWeightContent
                        title={t('one')}
                        text={t('oneDesc')}
                    />
                    <SampleWeightContent
                        title={t('two')}
                        text={t('twoDesc')}
                    />
                    <SampleWeightContent
                        title={t('thre')}
                        text={t('threDesc')}
                    />
                    <div className="flex flex-col items-center w-fit">
                        <img
                            src="img/udara.jpg"
                            alt="udara"
                            className="max-h-120 rounded-xl"
                        />
                        <p className="mt-1 text-sm text-center italic text-zinc-500">
                            Pengukuran di udara
                        </p>
                    </div>

                    <SampleWeightContent
                        title="4. Langkah Keempat"
                        text="Menimbang sampel singkong (yang sudah disiapkan langkah ke-3) dalam kondisi keranjang di air (Wu) . Pastikan semua bagian singkong dan keranjang tercelup dalam air."
                    />
                    <div className="flex flex-col items-center w-fit">
                        <img
                            src="img/air.jpg"
                            alt="udara"
                            className="max-h-110 rounded-xl"
                        />
                        <p className="mt-1 text-sm text-center italic text-zinc-500">
                            Pengukuran di dalam air
                        </p>
                    </div>

                    <SampleWeightContent
                        title={t('five')}
                        text={t('fiveDesc')}
                    />
                </div>
            </div>
        </>
    );
}

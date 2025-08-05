export default function SampleWeightContent({ title, text }) {
    return (
        <>
            <div className="mt-8 lg:mt-16 mb-12 md:mt-12 w-84 md:w-120 lg:w-164">
                <h1 className="font-extrabold text-lg md:text-xl 2xl:text-2xl text-zinc-800">
                    {title}
                </h1>

                <p className="mt-2 font-medium text-sm md:text-base text-zinc-600">{text}</p>
            </div>
        </>
    );
}

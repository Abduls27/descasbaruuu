export default function ImgCard({ src }) {
    return (
        <>
            <img src={src} alt="petani" className="h-40 xl:h-64 2xl:w-80 object-cover rounded-xl lg:grayscale hover:grayscale-0 transition-all duration-500" />
        </>
    );
}

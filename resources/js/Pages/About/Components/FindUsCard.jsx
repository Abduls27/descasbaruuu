import { Link } from "@inertiajs/react";

export default function FindUsCard({ children, title, content }) {
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="p-2 bg-zinc-800 rounded-xl">
                    {children}
                </div>
                <div>
                    <h2 className="font-semibold 2xl:text-lg">{title}</h2>
                    <Link className="text-zinc-500 text-xs 2xl:text-sm">
                        {content}
                    </Link>
                </div>
            </div>
        </>
    );
}

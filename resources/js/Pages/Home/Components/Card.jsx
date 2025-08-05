import { Children } from "react";

export default function Card({ title, text, children }) {
    return (
        <div>
            <div className="w-fit p-2 bg-zinc-700 rounded-xl">{children}</div>
            <div className="mt-8">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="w-86 2xl:w-120 mt-4 text-zinc-300">{text}</p>
            </div>
        </div>
    );
}

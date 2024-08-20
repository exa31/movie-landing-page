import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function ContentAccor({ item, index }) {
    const [active, setActive] = useState(false);

    return (
        <div className="p-4 bg-accordion">
            <div className="flex items-center justify-between cursor-pointer " onClick={() => setActive(!active)}>
                <div className="flex items-start">
                    <div className="p-4 mb-4 rounded-lg bg-stone-900 me-4">
                        <span className="text-white ">0{index + 1}</span>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl text-white">{item.title}</h3>
                        <div className={`duration-150 transition-all ${active ? "h-12 " : "h-0 overflow-hidden"}`}>
                            <p className="text-slate-400">{item.content}</p>
                        </div>
                    </div>
                </div>
                <div >{active ?
                    <FaMinus />
                    :
                    <FaPlus />
                }</div>
            </div>
        </div>
    )
}
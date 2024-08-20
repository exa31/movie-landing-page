"use client";

import { FaMinus, FaPlus } from "react-icons/fa6";
import ContentAccor from "./ContentAccor";

export default function Accordion({ data }) {


    return (
        <div >
            {data.map((item, index) => {
                return (
                    <ContentAccor key={index} index={index} item={item} />
                )
            })}
        </div>
    )
}
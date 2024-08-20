"use client"

import { useState } from "react";
import CardPlan from "./CardPlan";

const data = {
    Monthly: [{
        title: "Basic Plan",
        price: "$9.99",
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
        title: "Standard Plan",
        price: "$12.99",
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
        title: "Premium Plan",
        price: "$14.99",
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    }],
    Yearly: [{
        title: "Basic Plan",
        price: "$99.99",
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
        title: "Standard Plan",
        price: "$119.99",
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
        title: "Premium Plan",
        price: "$139.99",
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    }],
}


export default function PlanSec() {
    const [active, setActive] = useState("Monthly");
    return (
        <div className="container flex flex-col mx-auto mt-40 bg-black bg-opacity-50 ">
            <div className="flex justify-between">
                <div>
                    <h3 className="mb-8 text-4xl font-bold text-white">{`Choose the plan that's right for you`}</h3>
                    <p className="mb-20 text-slate-400">{`Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}</p>
                </div>
                <div className='flex gap-10 p-4 bg-black border-2 border-gray-900 rounded-lg h-min '>
                    <button onClick={() => setActive("Monthly")} className={`text-gray-300 transition hover:text-white p-3 rounded-xl ${active === "Monthly" && "text-white bg-slate-800"}`}>Monthly</button>
                    <button onClick={() => setActive("Yearly")} className={`text-gray-300 transition hover:text-white p-3 rounded-xl ${active === "Yearly" && "text-white bg-slate-800"}`}>Yearly</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-3 md:grid-cols-2 lg:grid-cols-3">
                {active === "Monthly" ? data.Monthly.map((item, index) => {
                    return <CardPlan key={index} active={active} title={item.title} price={item.price} description={item.description} />
                }) : data.Yearly.map((item, index) => {
                    return <CardPlan key={index} active={active} title={item.title} price={item.price} description={item.description} />
                })}
            </div>
        </div>
    )
}
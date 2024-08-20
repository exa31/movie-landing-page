export default function CardPlan({ title, price, description, active }) {
    return (
        <div className="p-10 bg-gray-900 rounded-lg">
            <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
            <p className="mb-8 text-lg text-slate-400">{description}</p>
            <h4 className="mb-8 text-xl font-bold text-white">{price}/<span className="text-sm">{active}</span></h4>
            <button className="w-full py-4 mt-2 text-white bg-black rounded-xl">Start free trial</button>
            <button className="w-full py-4 mt-2 text-white btn-red rounded-xl">Choose Plan</button>
        </div>
    )
}
import Accordion from "./Accordion"

const data = [
    {
        title: "What is StreamVibe?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "How Much does SreamVibe cost?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "What content is available on StreamVibe??",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "How can I watch StreamVibe?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "How do I sign up for StreamVibe?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "What is the StreamVibe free trial??",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "How do I contact StreamVibe customer support?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        title: "What are the StreamVibe payment methods?",
        content: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
]

export default function FAQSec() {
    return (
        <div className="container flex flex-col mx-auto mt-40 bg-black bg-opacity-50 ">
            <div className="flex justify-between">
                <div>
                    <h3 className="mb-8 text-4xl font-bold text-white">Frequently Asked Questions</h3>
                    <p className="mb-20 text-slate-400">{`Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.`}</p>
                </div>
                <div>
                    <button className="px-4 py-4 mt-[50px] flex items-center text-white btn-red rounded-md">Ask a Question</button>
                </div>
            </div>
            <Accordion data={data} />
        </div>
    )
}
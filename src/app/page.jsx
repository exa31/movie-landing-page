"use client"
import CategoriesSec from "@/components/CategoriesSec";
import ExprerienceSec from "@/components/ExprerienceSec";
import FAQSec from "@/components/FAQSec";
import PlanSec from "@/components/PlanSec";
import { IoTriangleSharp, } from "react-icons/io5";


export default function Home() {
  return (
    <main>
      <div className="h-screen mb-48 shadow-bg" style={
        {
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }
      }>
        <div className="h-full text-center px-80">
          <div className="flex flex-col items-center justify-end h-full bg-opacity-50">
            <h1 className="mb-10 text-4xl font-bold text-white">The Best Streaming Experience</h1>
            <p className="text-xl text-slate-400">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <button className="px-8 py-3 mt-[50px] flex items-center text-white btn-red rounded-md"><IoTriangleSharp className="rotate-90 me-2" />Start Wathcing Now</button>
          </div>
        </div>
      </div>
      <CategoriesSec />
      <ExprerienceSec />
      <FAQSec />
      <PlanSec />
      <div className="container w-full px-20 py-24 mx-auto mt-40 border-2 border-gray-800" style={{
        backgroundImage: "url('/img-trial.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="flex justify-between">
          <div>
            <h2 className="mb-4 text-3xl text-white">Start your free trial today!</h2>
            <p className="text-sm text-slate-400">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
          </div>
          <button className="px-6 py-4 mt-2 text-white btn-red rounded-xl">Start a Free Trial</button>
        </div>
      </div>
    </main>

  );
}

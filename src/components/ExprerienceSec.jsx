import { FaTablet } from "react-icons/fa6";
import { IoPhonePortrait, IoTv, IoLaptop } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { BsHeadsetVr } from "react-icons/bs";


export default function ExprerienceSec() {
    return (
        <div className="container flex flex-col mx-auto mt-40 bg-black bg-opacity-50 ">
            <h3 className="mb-8 text-4xl font-bold text-white">We Provide you streaming experience across various devices.</h3>
            <p className="mb-20 text-slate-400">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <IoPhonePortrait className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">Smarthphones</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <FaTablet className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">Tablet</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <IoTv className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">Smart TV</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <IoLaptop className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">Laptops</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <GiConsoleController className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">Gaming consoles</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
                <div className="p-10 border-2 border-gray-800 shadow-red-card rounded-xl">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="border-2 me-4 border-slate-800">
                                <BsHeadsetVr className="m-2 text-3xl text-red " />
                            </div>
                            <h5 className="text-xl text-white">VR Headsets</h5>
                        </div>
                        <p className="text-slate-400">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
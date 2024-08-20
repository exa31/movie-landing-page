import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer >
            <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
                <div
                    className="grid grid-cols-1 gap-2 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-6 lg:pt-16"
                >
                    <div>
                        <p className="font-medium text-gray-300">Home</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Categories </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Devices</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Pricing </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> FAQ </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-300">Movies</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Genre </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Trending </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> New Release </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Popular </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-300">Shows</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Genre </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Trending </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> New Release </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Popular </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-300">Support</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Contact Us </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-300">Subscription</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Plans </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75"> Features</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-300">Connect With Us</p>
                        <div className="flex gap-2 py-4">
                            <div className="p-3 rounded-lg bg-stone-800">
                                <FaFacebook className="text-xl text-white" />
                            </div>
                            <div className="p-3 rounded-lg bg-stone-800">
                                <FaXTwitter className="text-xl text-white" />
                            </div>
                            <div className="p-3 rounded-lg bg-stone-800">
                                <FaLinkedin className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-base text-gray-500">&copy; 2023. streamvib, All Rights Reserved</p>
                    <div className="flex gap-8 text-base text-gray-500">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
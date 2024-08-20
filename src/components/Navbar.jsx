"use client"

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            });
        }
    }, []);

    const pathname = usePathname();

    return (
        <header className={`fixed z-30 w-full transition-all duration-500  ${scroll ? 'bg-black top-0' : 'bg-transparent top-3'}`}>
            <div className="px-4 mx-auto max-w-screen-2xl sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-3xl font-bold text-red" href="#">
                            <h1>Exa</h1>
                        </a>
                    </div>

                    <div className="hidden p-5 bg-black rounded-[12px] border-2 border-gray-700 md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-8 text-sm">
                                <li>
                                    <Link className={`text-gray-300 transition hover:text-white p-3 rounded-xl ${pathname === "/" && "text-white bg-slate-800"}`} href="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-300 transition hover:text-white" href="#"> Movies&Shows </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-300 transition hover:text-white" href="#"> Support </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-300 transition hover:text-white" href="#"> Subcriptions </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md px-1 py-2.5 text-sm font-medium text-white shadow"
                                href="#"
                            >
                                <FaMagnifyingGlass className="text-2xl" />
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md px-1 py-2.5 text-sm font-medium text-white"
                                    href="#"
                                >
                                    <IoMdNotificationsOutline className="text-2xl" />
                                </a>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
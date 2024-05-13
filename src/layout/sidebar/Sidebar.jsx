import React from "react";
import { Link } from "react-router-dom";
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen }) => {
    const menus = [
        { name: "Фильм1", link: "/mediacontent"},
        { name: "Фильм2", link: "/screen"},
        { name: "Фильм3", link: "/camera"},
    ];
    return (
        <aside className="sticky top-20 h-screen z-10 flex">
            <div
                className={`bg-white ${isOpen ? "w-60 px-4" : "w-0"
                    } duration-500 text-black shadow`}
            >
                <div className="mt-4 flex flex-col gap-4 relative">
                    {/* Отображение элементов меню. Он используется метод map для перебора массива menus */}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={"group flex items-center text-md gap-7 font-medium p-2 hover:bg-gray-200 rounded-md"}
                        >
                            {/* Надпись в сайдбаре */}
                            <h2
                                className={`whitespace-pre duration-500 ${!isOpen && "opacity-0 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
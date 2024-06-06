import React from "react";
import {Link} from "react-router-dom";

const Sidebar = ({isOpen}) => {
    const menus = [
        {name: "Фильм 1", link: "/film1"},
        {name: "Фильм 2", link: "/film2"},
        {name: "Фильм 3", link: "/film3"},
    ];
    return (
        <aside className="sticky top-20 h-screen z-10 flex">
            <div
                className={`bg-white ${isOpen ? "w-60 px-4" : "w-0 opacity-0 overflow-hidden"
                } duration-500 text-black`}
                /* Если сайдбар открыт, то высталвяем ему ширину, иначе он имеет ширину 0, прозрачность и скрывает выходящий за пределы контент */
            >

                <div className="mt-4 flex flex-col gap-4 relative">
                    {/* Отображение элементов меню. Он используется метод map для перебора массива menus */}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={"flex items-center text-md gap-7 font-medium p-2 hover:bg-gray-200 rounded-md whitespace-pre duration-300"}
                            /* whitespace-pre здесь необходим, чтобы во время развертывания сайдбара текст содержащий пробел не делился на строки */
                        >
                            {/* Надпись в сайдбаре */}
                            <h2>
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
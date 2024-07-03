import React from 'react';

const TagButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="m-2 text-white bg-orange-600 px-2 py-1 rounded-md hover:bg-orange-700 text-sm whitespace-nowrap overflow-hidden text-ellipsis h-8">
            {children}
        </button>
        /*
        whitespace-nowrap: предотвращает перенос текста на новую строку.
        overflow-hidden: скрывает текст, выходящий за пределы контейнера.
        text-ellipsis: добавляет многоточие в конце обрезанного текста.
        */
    );
};

export default TagButton;
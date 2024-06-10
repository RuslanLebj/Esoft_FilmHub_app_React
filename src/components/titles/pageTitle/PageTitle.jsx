import React from 'react';

const PageTitle = ({ children }) => {
    return (
        <h2 className="text-2xl text-gray-800 font-semibold">
            {children}
        </h2>
    );
};

export default PageTitle;
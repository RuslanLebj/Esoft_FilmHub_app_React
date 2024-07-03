import React from 'react';

const PageTitle = ({ children }) => {
    return (
        <h2 className="text-4xl text-gray-800 font-bold">
            {children}
        </h2>
    );
};

export default PageTitle;
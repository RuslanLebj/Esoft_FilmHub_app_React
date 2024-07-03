import React, { useState, useEffect } from 'react';
import { errorTexts } from './errorTexts'; // Импортируем массив текстов
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";

const ErrorPage = ({ errorMessage }) => {
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        if (!errorMessage) {
            const randomIndex = Math.floor(Math.random() * errorTexts.length);
            setErrorText(errorTexts[randomIndex]);
        } else {
            setErrorText(errorMessage);
        }
    }, [errorMessage]);


    return (
        <div className="h-screen w-screen justify-center pt-5 flex">
            <PageTitle>
                {errorText}
            </PageTitle>
        </div>
    );
};

export default ErrorPage;
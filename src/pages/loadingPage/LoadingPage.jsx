import React, { useState, useEffect } from 'react';
import { loadingTexts } from './loadingTexts'; // Импортируем массив текстов
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";

const INTERVAL_TIME = 500; // Константа для интервала

const LoadingPage = () => {
    const [loadingText, setLoadingText] = useState(loadingTexts[0]);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % loadingTexts.length;
            setLoadingText(loadingTexts[index]);
        }, INTERVAL_TIME);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-screen justify-center pt-5 flex">
            <PageTitle>
                {loadingText}
            </PageTitle>
        </div>
    );
};

export default LoadingPage;
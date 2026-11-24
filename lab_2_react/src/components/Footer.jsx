import { useState, useEffect } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        const currentOs = navigator.platform;
        const currentBrowser = navigator.userAgent;

        localStorage.setItem('userOs', currentOs);
        localStorage.setItem('userBrowser', currentBrowser);

         const savedOs = localStorage.getItem('userOs');
         const savedBrowser = localStorage.getItem('userBrowser');

        setSystemInfo({ os: savedOs, browser: savedBrowser });
    }, []);

    return (
        <footer className="px-8 md:px-12 py-6 mt-4 border-t-2 border-[#4584d6] text-center opacity-80">
            <p className="text-sm italic">Резюме для Лабораторної роботи №4.</p>
            <div className="text-xs text-gray-700 flex flex-col gap-1">
                <p><strong className="font-bold">Операційна система:</strong> {systemInfo.os}</p>
                <p><strong className="font-bold">Браузер:</strong> {systemInfo.browser}</p>
            </div>
        </footer>
    );
}
export default Footer;